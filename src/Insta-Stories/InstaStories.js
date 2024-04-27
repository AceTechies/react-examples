import React from "react";
import Stories from "react-insta-stories";
import { profileInfo, storyData } from "../HoverToPlay/videos";

function InstaStories() {
  const profileDetails = () => (
    <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
      <img
        style={{
          width: "30px",
          height: "30px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        src={profileInfo.profileImage}
        alt="Profile"
      />
      <div>
        <h5 style={{ margin: "0px 10px", color: "#fff" }}>Test User</h5>
        <p style={{ margin: "5px 10px", color: "#888", fontSize: "12px" }}>
          ....voilaa!!!!
        </p>
      </div>
    </div>
  );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "50px 0px",
      }}
    >
      <Stories
        storyStyles={{ height: "100vh", objectFit: "cover" }}
        stories={storyData}
        defaultInterval={1500}
        width={432}
        height={800}
        header={profileDetails}
      />
    </div>
  );
}

export default InstaStories;
