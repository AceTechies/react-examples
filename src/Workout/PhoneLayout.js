import React, { useState } from "react";
import "./PhoneLayout.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAnimation, motion } from "framer-motion";

const data = [
  {
    name: "Makise Kurisu",
    location: "Tokyo, Japan",
    health: "75% Healthy",
    bpm: "121",
    mmHg: "125",
    spo2: "98",
    src: "/gym1.png",
    color: "#FF8134",
  },
  {
    name: "Josh Marie",
    location: "California, USA",
    health: "55% Healthy",
    bpm: "128",
    mmHg: "88",
    spo2: "90",
    src: "/gym2.png",
    color: "red",
  },
  {
    name: "Marianna Muse",
    location: "London, UK",
    health: "85% Healthy",
    bpm: "111",
    mmHg: "130",
    spo2: "99",
    src: "/gym3.png",
    color: "blue",
  },
];

function PhoneLayout() {
  const controlsOut = useAnimation();
  var color = "#FF8134";
  const [index, setIndex] = useState(0);
  const eachDetails = (src, title, subtitle) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "40px 30px",
        }}
      >
        <div>
          <img width={30} src={src} alt="" />
        </div>
        <div>
          <span style={{ fontSize: "34px", fontWeight: "800" }}>{title}</span>
        </div>
        <div>
          <span style={{ fontSize: "600", color: "#888" }}>{subtitle}</span>
        </div>
      </div>
    );
  };

  const handleLeftClick = () => {
    controlsOut
      .start({
        opacity: 0,
        transition: {
          duration: 0.8,
        },
      })
      .then(() => {
        setIndex((index + 1) % data.length);
        controlsOut.start({ opacity: 1 });
      });
  };
  
  const handleRightClick = () => {
    controlsOut
      .start({
        opacity: 0,
        transition: {
          duration: 0.8,
        },
      })
      .then(() => {
        setIndex((index + 1) % data.length);
      });
  };

  return (
    <div className="phoneLayout_container">
      <motion.div
        style={{
          position: "absolute",
          width: "450px",
          height: "99%",
          backgroundColor: color,
          zIndex: "-1",
          borderRadius: "42px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1] }}
        transition={{ duration: 1.5 }}
        key={data[index].name}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1] }}
        transition={{ duration: 1.5 }}
        key={data[index].name}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        exit={{ opacity: 0, transitionDelay: 0.5 }}
      >
        <h1 style={{ fontSize: "54px", margin: "5px 0px" }}>
          {data[index].name}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "350px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon style={{ marginRight: "10px" }} />
            <span>{data[index].location}</span>
          </div>
          <h3 style={{ margin: "0px" }}>•</h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DashboardIcon style={{ marginRight: "10px" }} />
            <span>{data[index].health}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        key={data[index].bpm}
        initial={{ opacity: 0, height: "60vh" }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.02 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // animate={controls}
      >
        <img
          style={{ width: "450px", height: "60vh", objectFit: "cover" }}
          src={data[index].src}
          alt=""
        />
      </motion.div>
      <div className="phoneLayout_details_container">
        {eachDetails("./heart.png", data[index].bpm, "bpm")}
        {eachDetails("./heart-beat.png", data[index].mmHg, "mmHg")}
        {eachDetails("./drop.png", data[index].spo2, "SpO2")}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
          top: "50%",
        }}
      >
        <div
          onClick={() => handleLeftClick()}
          style={{
            width: "50px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#222",
            padding: "10px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <ArrowBackIosIcon />
        </div>
        <div
          onClick={() => handleRightClick()}
          style={{
            width: "50px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#222",
            padding: "10px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default PhoneLayout;
