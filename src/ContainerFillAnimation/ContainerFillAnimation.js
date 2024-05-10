import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@mui/material";

function ContainerFillAnimation() {
  const yesControls = useAnimation();
  const noControls = useAnimation();
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const fillColor = (controls, isYes) => {
    if (isYes) {
      setYesClicked(true);
      setNoClicked(false);
      noControls.start({
        transition: {
          duration: 0.5,
        },
        x: [0, -500],
      });
    } else {
      setNoClicked(true);
      setYesClicked(false);
      yesControls.start({
        transition: {
          duration: 0.2,
        },
        x: [0, -500],
      });
    }
    controls.start({
      transition: {
        duration: 2.09,
      },
      x: [-500, 0],
    });
  };

  const getAnimatedContainer = (showInitialColor, controls) => {
    return (
      <div
        style={{
          width: "100%",
          height: "50px",
          border: "3px solid white",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: showInitialColor,
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            background: showInitialColor,
          }}
          animate={controls}
        ></motion.div>
      </div>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ color: "#fff", fontSize: "44px" }}>Animated Polling</h1>
      </div>
      <div>
        <Card style={{ borderRadius: "22px" }}>
          <div style={{ backgroundColor: "black", padding: "8px 20px" }}>
            <h2 style={{ color: "#fff", fontWeight: "600" }}>
              Want to Crack Jobs Offering More than 8LPA?
            </h2>
          </div>
          <div style={{ margin: "20px 0px" }}>
            <div
              onClick={() => fillColor(yesControls, true)}
              style={{ padding: "10px 20px", position: "relative" }}
            >
              {getAnimatedContainer(
                yesClicked
                  ? "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)"
                  : "#afaaaa4d",
                yesControls
              )}
              <div style={{ position: "absolute", top: "0px", left: "40px" }}>
                <h2
                  style={{
                    color: `${yesClicked ? "#fff" : "inherit"}`,
                    fontWeight: "400",
                  }}
                >
                  Yes
                </h2>
              </div>
            </div>
            <div
              onClick={() => fillColor(noControls, false)}
              style={{ padding: "10px 20px", position: "relative" }}
            >
              {getAnimatedContainer(
                noClicked
                  ? "linear-gradient(to right, #ec008c, #fc6767)"
                  : "#afaaaa4d",
                noControls
              )}
              <div style={{ position: "absolute", top: "0px", left: "40px" }}>
                <h2
                  style={{
                    color: `${noClicked ? "#fff" : "inherit"}`,
                    fontWeight: "400",
                  }}
                >
                  No
                </h2>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ContainerFillAnimation;
