// src/components/VideoPlayer.jsx

import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ topic, onComplete }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleEnded = () => {
      setEnded(true);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [topic]);

  const seek = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={topic.videoPath}
        controls={false}
        className="video-player"
      />
      <div className="controls">
        <button onClick={() => seek(-15)}>&laquo; 15s</button>
        <span>{Math.floor(currentTime)}s</span>
        <button onClick={() => seek(15)}>15s &raquo;</button>
      </div>
      {ended && (
        <button className="btn btn-primary mt-3" onClick={onComplete}>
          Proceed to Quiz
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
