import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Smoothie.css";

var tempString =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum has been  Lorem Ipsum has beent Lorem Ipsum has been Lorem Ipsum has been he industry's standard. Lorem Ipsum has been the industry's standard.";
function Smoothie() {
  const [currIndex, setCurrIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(0);
  const [currColor, setCurrentColor] = useState("#fafa1147");

  const LeftSmoothieAnimation = () => {
    return (
      <>
        <motion.div
          key={currIndex}
          initial={{ opacity: 1, x: -550 }}
          animate={{ opacity: 0.8, x: 50 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
        >
          <img
            style={{ width: "30vw", height: "600px", objectFit: "contain" }}
            src={`/smoothie${currIndex}.png`}
            alt=""
          />
        </motion.div>
        <motion.div
          key={currIndex + 1}
          initial={{ opacity: 1, x: 50 }}
          animate={{ opacity: 0.25, x: -550, transition: { duration: 0.85 } }}
          exit={{ opacity: 0 }}
          style={{ position: "absolute", top: "168px", left: 0 }}
        >
          <img
            style={{ width: "30vw", height: "600px", objectFit: "contain" }}
            src={`/smoothie${prevIndex}.png`}
            alt=""
          />
        </motion.div>
      </>
    );
  };
  const RightCardsContainer = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100vh",
          marginLeft: "40px",
        }}
      >
        <div style={{ width: "500px" }}>
          <h1
            style={{
              fontSize: "80px",
              fontFamily: "fantasy",
              fontWeight: "300",
              margin: "0px",
              wordSpacing: "8px",
            }}
          >
            The Juice & Smoothie Bar
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "#888",
              fontFamily: "sans-serif",
              lineHeight: "1.5rem",
            }}
          >
            {tempString}
          </p>
        </div>
        <div
          className="smoothie_card_container"
          style={{ display: "flex", width: "850px", overflow: "auto" }}
        >
          {[1, 2, 3, 4, 5].map((item, index) => {
            return myCard(item);
          })}
        </div>
      </div>
    );
  };

  const myCard = (id) => {
    var color = "red";
    switch (id) {
      case 1:
        color = "#fafa1147";
        break;
      case 2:
        color = "#ee82ee45";
        break;
      case 3:
        color = "#ff353545";
        break;
      case 4:
        color = "#ffffb6a3";
        break;
      case 5:
        color = "#36f93636";
        break;

      default:
        break;
    }
    return (
      <div
        key={id}
        style={{
          margin: "0px 5px",
          backgroundColor: color,
          padding: "25px",
          borderRadius: "52px",
          cursor: "pointer",
        }}
        onClick={(e) => handleClick(e, id)}
      >
        <motion.img
          key={id}
          width={200}
          height={250}
          style={{ borderRadius: "22px" }}
          src={`/smoothie${id}.png`}
          alt=""
          whileHover={{ scale: 1.09 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    );
  };
  const handleClick = (event, index) => {
    setPrevIndex(currIndex);
    setCurrIndex(index);
    var color = "red";
    switch (index) {
      case 1:
        color = "#fafa1147";
        break;
      case 2:
        color = "#ee82ee45";
        break;
      case 3:
        color = "#ff353545";
        break;
      case 4:
        color = "#ffffb6a3";
        break;
      case 5:
        color = "#36f93636";
        break;

      default:
        break;
    }
    setCurrentColor(color);
  };

  return (
    <div style={{ display: "flex", backgroundColor: "#fff", height: "100vh" }}>
      <motion.div
        style={{
          flex: "4",
          backgroundColor: currColor,
          display: "flex",
          alignItems: "center",
        }}
        animate={{ backgroundColor: currColor }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        {LeftSmoothieAnimation()}
      </motion.div>
      <div style={{ flex: "4" }}>{RightCardsContainer()}</div>
    </div>
  );
}

export default Smoothie;
