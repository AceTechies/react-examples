import React, { useState } from "react";
import { motion } from "framer-motion";

function NotificationComponent() {
  const [notificationGranted, setNotificationGranted] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const requestNotificationPermission = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        setNotificationGranted(true);
      }
    });
  };

  const showNotification = () => {
    if (notificationGranted) {
      new Notification("AceTechies Academy", {
        body: notificationText,
      });
    } else {
      alert("Please grant permission to show notifications.");
    }
  };

  const MyButton = () => {
    return (
      <motion.button
        onClick={showNotification}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
        style={{
          backgroundImage:
            "linear-gradient(to right top, #f310f3, #e205f6, #cf01f9, #ba04fc, #a20cff)",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          outline: "none",
        }}
      >
        Click Me
      </motion.button>
    );
  };
  const RequestAcessButton = () => {
    return (
      <motion.button
        onClick={requestNotificationPermission}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
        style={{
          backgroundImage:
            "linear-gradient(to right top, #ff0235, #fb2435, #f73436, #f34037, #ef4a39)",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          outline: "none",
        }}
      >
        Request Notification Permission
      </motion.button>
    );
  };

  const handleChange = (e) => {
    setNotificationText(e.target.value);
  };

  const AnimatedInput = () => {
    return (
      <motion.textarea
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.0 }}
        whileFocus={{
          scale: 1.0,
          boxShadow: "0px 0px 10px 3px rgba(128,0,128,0.75)",
        }}
        style={{
          border: "2px solid #8a2be2",
          backgroundColor: "white",
          borderRadius: "5px",
          padding: "10px",
          outline: "none",
          width: "300px",
          fontSize: "20px",
          color: "#222",
          fontFamily: "sans-serif",
          margin: "20px 0px",
        }}
        placeholder="Type something..."
        onChange={(e) => handleChange(e)}
      />
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: "35%",
        top: "20%",
      }}
    >
      <div>
        <h1
          style={{
            color: "#fff",
            fontFamily: "fantasy",
            fontSize: "35px",
            fontWeight: "400",
          }}
        >
          {" "}
          Send Browser Notifications
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {AnimatedInput()}
        {MyButton()}
      </div>
      <div style={{ margin: "40px 0px" }}>{RequestAcessButton()}</div>
    </div>
  );
}

export default NotificationComponent;
