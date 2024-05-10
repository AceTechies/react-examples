import React, { useState } from "react";
import "./Workout.css";
import HomeIcon from "@mui/icons-material/Home";
import WindowIcon from "@mui/icons-material/Window";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import { motion } from "framer-motion";
import Topbar from "./Topbar";
import WorkoutsTabScreen from "./WorkoutsTabScreen";
import PhoneLayout from "./PhoneLayout";

function Workout() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedLeftIndex, setSelectedLeftIndex] = useState(0);

  const iconData = [
    <HomeIcon style={{ fontSize: "30px" }} />,
    <WindowIcon style={{ fontSize: "30px" }} />,
    <PersonIcon style={{ fontSize: "30px" }} />,
    <SettingsIcon style={{ fontSize: "30px" }} />,
    <BarChartIcon style={{ fontSize: "30px" }} />,
  ];

  const getLeftIcons = () => {
    const handleHover = (index) => {
      setHoveredIndex(index);
    };

    const handleHoverEnd = () => {
      setHoveredIndex(null);
    };

    return (
      <div>
        {iconData.map((icon, index) => {
          const isHovered = hoveredIndex === index;
          const isSelectedLeftIndex = selectedLeftIndex === index;
          const style = {
            fontSize: "30px",
            margin: "25px 20px",
            color: isHovered
              ? "#ffffff"
              : isSelectedLeftIndex
              ? "#fff"
              : "#888",
            cursor: "pointer",
          };

          return (
            <>
              <div
                onClick={() => setSelectedLeftIndex(index)}
                style={{ display: "flex", alignItems: "center" }}
              >
                {isSelectedLeftIndex ? (
                  <motion.div
                    initial={{ y: 0, opacity: 0.5 }}
                    animate={{ y: 10, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      y: { type: "spring", stiffness: 100, damping: 10 },
                    }}
                    style={{
                      width: "5px",
                      height: "30px",
                      backgroundColor: "#FF8134",
                      marginTop: "-20px",
                    }}
                  />
                ) : (
                  <div />
                )}
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ ease: "easeIn", duration: 0.2 }}
                  style={style}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleHoverEnd}
                >
                  {icon}
                </motion.div>
              </div>
            </>
          );
        })}
      </div>
    );
  };
  const leftDivision = () => {
    return (
      <div className="leftDivision_main_container">
        <div style={{ margin: "20px 15px" }}>
          <img style={{ width: "40px" }} src="/workout-logo.png" alt="" />
        </div>
        <div>{getLeftIcons()}</div>
        <div style={{ margin: "20px 15px" }}>
          <img
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
            src="https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    );
  };

  return (
    <div className="workout_main_container">
      {leftDivision()}
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Topbar />
        <WorkoutsTabScreen />
      </div>
      <div>
        <PhoneLayout />
      </div>
    </div>
  );
}

export default Workout;
