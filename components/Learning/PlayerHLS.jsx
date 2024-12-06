import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import toast from "react-hot-toast";
import "video.js/dist/video-js.min.css";
import videojs from "video.js";
import "./player.css";
import http from "@/utils/http-common";
import TitleBarVideojs from "./TitleBarVideojs";

const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const inputRef = useRef(null);
  const lastActionTime = useRef(0);
  const [lastVideo, setLastVideo] = useState(false);

  videojs.registerComponent("TitleBar", TitleBarVideojs);

  const {
    courseId,
    options,
    onReady,
    videoId,
    videoFlag,
    setVideoId,
    setVideoIcon,
    allVideos = [],
    userTracks = {},
  } = props;

  function makeRequest(courseId, videoId, watchedDuration, isEnded) {
    http
      .post("/v1/video_track", { courseId, videoId, watchedDuration, isEnded })
      .then(() => {
        // console.log("Tracking data posted successfully");
        lastActionTime.current = watchedDuration;
      })
      .catch((error) => {
        console.error("Failed to post video tracking data:", error);
        toast.error("Something went wrong!");
      });
  }

  const handleTimeUpdate = _.throttle(
    (player, lastActionTime, duration) => {
      const currentTime = parseInt(player?.currentTime() || 0);
      // console.log(
      //   `Throttled function called, currentTime: ${currentTime}, lastActionTime: ${lastActionTime.current}`,
      // );
      if (currentTime && currentTime - lastActionTime.current >= 10) {
        const videoId = inputRef?.current?.value;
        const remaining = duration - currentTime
        // console.log("Condition met, sending data to server");
        makeRequest(courseId, videoId, currentTime, false);
        //remaining < 14 && setVideoIcon(videoId, "ended");
        //currentTime < 21 && setVideoIcon(videoId, "play");
      }
    },
    10000,
    { trailing: true },
  );

  function isLastVideo(videoId) {
    const currentIndex = allVideos.findIndex(
      (item) => item._id === videoId,
    );
    setLastVideo((currentIndex + 1) === allVideos.length ? true : false)
  }

  function makePlayerAdvanced(player) {
    const currentVideo = _.find(allVideos, { _id: videoId });
    const source = currentVideo?.filePath;
    const title = currentVideo?.title;
    const duration = currentVideo?.duration;
    player.addChild("TitleBar", { text: title });
    player.src({
      src: source,
      type: source?.endsWith(".m3u8") ? "application/x-mpegURL" : undefined,
    });

    player.getChild("ControlBar").addChild(
      "button",
      {
        className: "vjs-visible-text",
        controlText: "Previous",
        id: "myPreviousButton",
        clickHandler: function (event) {
          const videoId = inputRef?.current?.value;
          videojs.log("videoId: ", videoId);
          const currentIndex = allVideos.findIndex(
            (item) => item._id === videoId,
          );
          console.log("currentIndex", currentIndex, videoId);
          if (currentIndex > 0) {
            const previousId = allVideos[currentIndex - 1]._id;
            console.log("The previous ID is:", previousId);
            setVideoId(previousId);
            //setVideoIcon(previousId, "play");
          } else {
            // console.log("There is no previous ID. You are at the beginning of the array or the ID was not found.");
          }
        },
      },
      0,
    );

    player.getChild("ControlBar").addChild("button", {
      className: "vjs-visible-text",
      controlText: "Next",
      id: "myNextButton",
      clickHandler: function (event) {
        const videoId = inputRef?.current?.value;
        videojs.log("videoId: ", videoId);
        // Find the index of the object with the current ID
        const currentIndex = allVideos.findIndex(
          (item) => item._id === videoId,
        );
        if (currentIndex !== -1 && currentIndex + 1 < allVideos.length) {
          const nextId = allVideos[currentIndex + 1]._id;
          console.log("The next ID is:", nextId);
          setVideoId(nextId);
          //setVideoIcon(nextId, "play");
        } else {
          // console.log("There is no next ID. You are at the end of the array or the ID was not found.");
        }
      },
    });

    document
      .getElementById("video-ended-message")
      .addEventListener("click", function () {
        this.style.display = "none";
      });

    player.on("play", () => {
      const messageDiv = document.getElementById("video-ended-message");
      messageDiv.style.display = "none";
      console.log("Video is playing");
      const currentTime = parseInt(player?.currentTime() || 0);
      const videoId = inputRef?.current?.value;
      makeRequest(courseId, videoId, currentTime || 1, false);
    });

    player.on("ended", () => {
      const messageDiv = document.getElementById("video-ended-message");
      messageDiv.style.display = "flex";
      console.log("Video is ended");
      const currentTime = parseInt(player?.currentTime() || 0);
      const videoId = inputRef?.current?.value;
      makeRequest(courseId, videoId, currentTime, true);
      //setVideoIcon(videoId, "ended");
    });

    player.on("seeking", () => {
      lastActionTime.current = parseInt(player.currentTime()); // Reset last action time on seek
    });

    player.on("timeupdate", () =>
      handleTimeUpdate(player, lastActionTime, duration, false),
    );
  }

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);
      const player = (playerRef.current = videojs(
        videoElement,
        {
          ...options,
          playbackRates: [0.5, 1, 1.5, 2],
          children: ["bigPlayButton", "controlBar"],
          controlBar: {
            skipButtons: {
              forward: 10,
              backward: 10,
            },
          },
        },
        () => {
          videojs.log("player is ready");
          onReady && onReady(player);
        },
      ));

      //player.addChild('TitleBar', { text: 'The Title of The Video!' });
      makePlayerAdvanced(player);
    } else {
      const player = playerRef.current;
      if (player) {
        const currentVideo = _.find(allVideos, { _id: videoId });
        const source = currentVideo?.filePath;
        const title = currentVideo?.title;
        player.addChild("TitleBar", { text: title });
        player.src({
          src: source,
          type: source?.endsWith(".m3u8") ? "application/x-mpegURL" : undefined,
        });
        player.play();
      }
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  useEffect(() => {
    const player = playerRef.current;
    if (player && videoId) {
      isLastVideo(videoId)
      if (videoFlag === "Resume") {
        lastActionTime.current = userTracks?.lastDuration || 0;
        player?.currentTime(userTracks?.lastDuration || 0);
      }
      player.play();
    }
  }, [videoId]);

  return (
    <div id="video-container" style={{ position: "relative" }}>
      <div className="vjs-player" data-vjs-player>
        <div ref={videoRef} style={{ width: "100%" }} />
        <input type="hidden" ref={inputRef} value={videoId}></input>
        <div id="video-ended-message">{lastVideo ? "Course Completed" : "Ended, Click Next."}</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
