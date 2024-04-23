import React from "react";
import "./VideoContainer.css";
import HoverVideoPlayer from "react-hover-video-player";
import { data } from "./videos";

function Hovertoplay() {
  return (
    <div>
      <div className="video_container_title">
        <h1>Hover to Play</h1>
      </div>
      <div className="main_video_container">
        {data.map((video) => {
          return (
            <div>
              <HoverVideoPlayer
                restartOnPaused={true}
                videoSrc={video.src}
                pausedOverlay={
                  <img
                    src={video.thumnail}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hovertoplay;
