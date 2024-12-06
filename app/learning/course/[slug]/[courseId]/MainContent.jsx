"use client";

import React, { useEffect, useState } from "react";
import VideoPlayer from "@/components/Learning/PlayerHLS";
// import Player from "@/components/Learning/Player";
import Content from "./Content";
import { Button } from "@/primitives/button";
import Image from "next/image";
import videojs from "video.js";

const MainContent = ({ course, currentUser }) => {
  const playerRef = React.useRef(null);
  const [videoId, setVideoId] = useState(null);
  const [icons, setIcons] = useState([]);
  const [videoFlag, setVideoFlag] = useState(null);
  const [startVideo, setStartVideo] = useState(false);
  // const { lessons = {} } = course;
  // const chapters = lessons.reduce((prev, { chapter, ...items }) => {
  //   const name = chapter?.name || "";
  //   const id = prev.findIndex((item) => item.name === name);
  //   id >= 0 ? prev[id].items.push(items) : prev.push({ name, items: [items] });
  //   return prev;
  // }, []);

  // useEffect(() => {
  //   if (course && course.chapters?.length > 0) {
  //     if (videoId === null) {
  //       const firstChapter = course.chapters[0];
  //       if (firstChapter.lessons?.length > 0) {
  //         const firstLesson = firstChapter.lessons[0];
  //         setVideoId(firstLesson._id);
  //       }
  //     }
  //   }
  // }, [course]);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    preload: "metadata",
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("ended", () => {
      videojs.log("video is ended");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const handleStart = () => {
    if (course && course.chapters?.length > 0 && course.isEligible) {
      if (videoId === null) {
        const firstChapter = course.chapters[0];
        if (firstChapter.lessons?.length > 0) {
          const firstLesson = firstChapter.lessons[0];
          setVideoId(firstLesson._id);
          setVideoFlag("Beginning");
          setStartVideo(true);
        }
      }
    }
  };

  const handleResume = (userTracks) => {
    if (userTracks) {
      console.log(userTracks);
      const { lesson } = userTracks;
      setVideoId(lesson);
      setVideoFlag("Resume");
      setStartVideo(true);
    }
  };

  const getSortedLessons = (course) => {
    const items = [];
    course.chapters?.map((chapter) =>
      chapter.lessons?.map((lesson) => items.push(lesson)),
    );
    return items;
  };

  const allVideos = getSortedLessons(course);

  const getVideoIcon = track => {
    const { isEnded, watchedDuration } = track || {};
    console.log("getVideoIcon track", isEnded, watchedDuration);
    let icon = "bx bx-play-circle";
    if (isEnded) {
      icon = "bx bx-check-circle";
    } else if (watchedDuration) {
      icon = "bx bx-bolt-circle";
    }
    return icon;
  };

  const setVideoIcon = (videoId, type) => {
    setIcons(prevIcons =>
      prevIcons.map(icon => icon._id === videoId ?
        {
          ...icon,
          className: icon.isEnded ? icon.className : (type === "ended" ? "bx bx-check-circle" : "bx bx-bolt-circle"),
          isEnded: (icon.isEnded || type === "ended") ? true : false
        } : icon)
    );
  };

  useEffect(() => {
    const videoIds = allVideos?.map(({ _id, track }) => ({ _id, className: getVideoIcon(track), isEnded: track?.isEnded || false }));
    if (icons.length === 0 && videoIds) {
      setIcons(videoIds);
    }
  }, [allVideos]);

  const getIconClassName = (videoId) => {
    const icon = icons.find(icon => icon._id === videoId);
    return icon ? icon.className : "bx bx-play-circle";
  };

  console.log(icons);

  return (
    <div className="row">
      {!startVideo && (
        <div className="success-story-area pb-50">
          <div className="container">
            <div className="video-box">
              <div className="row align-items-center">
                <div className="col-12">
                  <h4>{course.name}</h4>
                </div>
              </div>
              {!course.isEligible && (
                <div className="row align-items-center">
                  <div className="col-12">
                    <h5 className="mtb-20">
                      Sorry, You don't have access to this course. Please
                      contact adminstrator.
                    </h5>
                  </div>
                </div>
              )}
              {course.isEligible && (
                <div className="row align-items-center">
                  {course?.userTracks && (
                    <>
                      <div
                        className={
                          course.completionPercentage > 99.99
                            ? "d-none"
                            : "col-lg-6 col-md-12 text-lg-end text-center mt-20"
                        }
                      >
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={() => handleResume(course?.userTracks)}
                        >
                          <i className={"bx bx-play-circle"}></i> Resume
                          Course
                        </Button>
                      </div>
                      <div className="col-lg-6 col-md-12 text-lg-start text-center mt-20">
                        {course.completionPercentage > 99.99 &&
                          "Course has been Completed "}
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={() => handleStart()}
                        >
                          <i className={"bx bx-play-circle"}></i>{" "}
                          {course.completionPercentage > 99.99
                            ? "Watch Again"
                            : "Start from beginning"}
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              )}
              <div className="image mt-20">
                <Image
                  src={
                    course.bannerImage ||
                    course.thumbnailImage ||
                    "https://res.cloudinary.com/dev-empty/image/upload/v1707716814/ahooraqaikeoou3tqp7a.jpg"
                  }
                  alt={course.name}
                  width={750}
                  height={500}
                />
              </div>
              {course.isEligible && !course.userTracks && (
                <div
                  onClick={() => handleStart()}
                  className="video-btn popup-youtube"
                >
                  <i className="flaticon-play"></i>
                </div>
              )}
              <div className="shape10">
                <img src="/images/shape9.png" alt="image" />
              </div>
            </div>
          </div>

          <div className="shape2">
            <img src="/images/shape2.png" alt="image" />
          </div>
          <div className="shape3">
            <img src="/images/shape3.png" alt="image" />
          </div>
          <div className="shape4">
            <img src="/images/shape4.png" alt="image" />
          </div>
          <div className="shape9">
            <img src="/images/shape8.svg" alt="image" />
          </div>
        </div>
      )}
      <div className="col-lg-9 col-md-8">
        <div className="video-content">
          {videoId && startVideo && (
            <VideoPlayer
              options={videoJsOptions}
              onReady={handlePlayerReady}
              videoFlag={videoFlag}
              videoId={videoId}
              setVideoId={setVideoId}
              allVideos={allVideos}
              courseId={course._id}
              userTracks={course?.userTracks}
              setVideoIcon={setVideoIcon}
              icons={icons}
            />
          )}
          <div className="d-none d-sm-block mt-10">
            <Content {...course} />
          </div>
        </div>
      </div>
      {course.isEligible && videoId && startVideo && (
        <div className="col-lg-3 col-md-4">
          <div className="video-sidebar">
            <div className="course-video-list">
              <h4 className="title mb-3">{course.name}</h4>
              <ul>
                {course.chapters?.map((chapter) => (
                  <li key={chapter._id}>
                    <span className="video-title">{chapter.name}</span>
                    {chapter.lessons?.map((lesson) => (
                      <span
                        style={
                          videoId === lesson?._id
                            ? {
                              backgroundColor: "#fe4a55",
                              color: "#ffffff",
                              fontWeight: "bold",
                            }
                            : {}
                        }
                        className="d-block fs-13 mt-1 video-icon"
                        onClick={() => {
                          setVideoId(lesson?._id);
                        }}
                      >
                        <i className={getIconClassName(lesson?._id)}></i>{" "}
                        {lesson.title}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="d-block d-sm-none mt-20">
        <Content {...course} />
      </div>
    </div>
  );
};

export default MainContent;
