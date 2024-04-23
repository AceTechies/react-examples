import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./FlippingCard.css";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

const CardFlip = () => {
  const controls = useAnimation();
  const [showText, setShowText] = useState(false);
  const handleHover = () => {
    controls.start({ rotateY: 180 });
    setTimeout(() => {
      setShowText(true);
    }, 300);
  };

  const handleHoverExit = () => {
    controls.start({ rotateY: 0 });
    setTimeout(() => {
      setShowText(false);
    }, 400);
  };

  const getCard = () => {
    return (
      <div className="flippingCardMainContainer">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <div className="title-container">
            <h4>Crack more than 8 LPA Jobs</h4>
          </div>
          <div className="stats-container">
            <AlignVerticalBottomIcon style={{ color: "green" }} />
            <h4>75% increase in readers</h4>
          </div>
          <div className="stats-container">
            <FavoriteIcon style={{ color: "#f24f4fe0" }} />
            <h4>75% increase in readers</h4>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            marginTop: "20px",
          }}
        >
          <Button
            style={{
              textTransform: "inherit",
              backgroundColor: "#222",
              color: "white",
            }}
          >
            Next
          </Button>
        </div>
      </div>
    );
  };

  const getTextDetails = () => {
    return (
      <div style={{ padding: "10px" }}>
        <div>
          <h3>Crack More than 8 LPA Jobs.</h3>
        </div>
        <div>
          <p style={{ margin: "0px", fontSize: "12px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button
            style={{
              fontSize: "14px",
              textTransform: "inherit",
              backgroundColor: "#222",
              color: "#fff",
            }}
          >
            Read Full Article
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        perspective: "1000px",
        display: "inline-block",
        position: "absolute",
        left: "20%",
        top: "20%",
      }}
    >
      <motion.div
        animate={controls}
        transition={{ duration: 0.85 }}
        style={{ width: "200px", height: "320px", position: "relative" }}
        onHoverStart={handleHover}
        onHoverEnd={handleHoverExit}
      >
        {showText ? (
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
              rotateY: -180,
            }}
            whileHover={{ scale: 1.1 }}
          >
            {getTextDetails()}
          </motion.div>
        ) : (
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
              //   rotateY: -180,
            }}
            whileHover={{ scale: 1.1 }}
          >
            {getCard()}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CardFlip;
