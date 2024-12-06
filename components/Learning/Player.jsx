"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Player = ({ videoId }) => {
  const [videoUrl, setVideoUrl] = useState("");

  // useEffect(() => {
  //   const fetchVideo = async () => {
  //     try {
  //       const asset = await axios.get(`/api/videos/${videoId}`);
  //       setVideoUrl(asset.data.video_url);
  //     } catch (error) {
  //       console.error("Error fetching video:", error);
  //     }
  //   };

  //   fetchVideo();
  // }, [videoId]);
  return (
    <div className="video-content-box">
      {videoId && (
        <video width="100%" height="100%" controls>
          <source src={videoId} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Player;
