import React from "react";
import "./Instagram_Reels_Scroll.css";
import { data } from "../HoverToPlay/videos";

function InstagramReelsScroll() {
  return (
    <div className="instagram-main-container">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "80px" }}
            src="https://cdn-icons-png.flaticon.com/512/11820/11820224.png"
            alt=""
          />
        </div>
        <h2 style={{ color: "#fff", margin: "10px 0px 25px 0px" }}>
          Reels Scroll Effect
        </h2>
      </div>
      <div className="instagram-reel-container">
        <div className="instagram-video-player">
          {data.map((video) => {
            return (
              <video src={video.src} loop={true} muted={true} autoPlay={true} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InstagramReelsScroll;
