import React, { useState } from "react";
import { motion } from "framer-motion";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

const topBarData = ["Workouts", "Nutrition", "AI coach", "Metrics"];
function Topbar() {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        height: "50px",
        borderBottom: "1px solid rgb(136 136 136 / 40%)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
          padding: "0px 40px",
        }}
      >
        {topBarData.map((item, index) => {
          return (
            <div
              onClick={() => setIsSelected(index)}
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div>
                <h4 style={{ color: "#fff", margin: "0px 0px 25px 0px" }}>
                  {item}
                </h4>
              </div>
              {isSelected === index ? (
                <motion.div
                  initial={{
                    x: 0,
                    opacity: 0.5,
                    width: "0px",
                    position: "absolute",
                  }}
                  animate={{ x: 5, opacity: 1, width: "120px", left: "-10px" }}
                  transition={{
                    duration: 0.4,
                    y: { type: "spring", stiffness: 100, damping: 10 },
                  }}
                  style={{
                    height: "5px",
                    backgroundColor: "#FF8134",
                    top: "100%",
                    marginLeft: "-10px",
                  }}
                />
              ) : (
                <div />
              )}
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "200px",
          justifyContent: "space-between",
        }}
      >
        <SearchIcon style={{ color: "#fff" }} />
        <div
          style={{
            padding: "10px",
            backgroundColor: "rgb(136 136 136 / 40%)",
            width: "20px",
            height: "20px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <SettingsIcon />
        </div>
        <div
          style={{
            padding: "10px",
            backgroundColor: "rgb(136 136 136 / 40%)",
            width: "20px",
            height: "20px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <NotificationsIcon />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
