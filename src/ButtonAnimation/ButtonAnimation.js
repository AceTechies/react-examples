import React from "react";
import { motion, useAnimation } from "framer-motion";
import DoneIcon from "@mui/icons-material/Done";

function ButtonAnimation() {
  const circleAnimationControls = useAnimation();
  const cofeeAnimation = useAnimation();
  const newOrderAnimation = useAnimation();
  const orderPlacedAnimation = useAnimation();
  const tickAnimation = useAnimation();

  const startCircleAnimation = () => {
    circleAnimationControls.start({
      transition: {
        duration: 2.5,
      },
      strokeDashoffset: 0,
    });

    setTimeout(() => {
      tickAnimation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }, 1800);

    setTimeout(() => {
      cofeeAnimation.start({
        opacity: 0,
        transition: {
          duration: 0.8,
        },
      });
    }, 2500);

    setTimeout(() => {
      tickAnimation.start({ opacity: 0, transition: { duration: 0.5 } });
    }, 2800);

    setTimeout(() => {
      orderPlacedAnimation.start({
        opacity: 1,
        transition: {
          duration: 1.2,
          type: "easeIn",
        },
      });
    }, 3000);
  };

  const startNewOrderAnimation = () => {
    newOrderAnimation.start({
      x: 300,
      opacity: 0,
      transition: {
        duration: 1.5,
        type: "tween",
      },
    });

    setTimeout(() => {
      newOrderAnimation.set({ zIndex: -1 });
    }, 1600);

    setTimeout(() => {
      cofeeAnimation.start({
        opacity: 1,
        x: 230,
        transition: {
          duration: 0.8,
        },
      });
      setTimeout(() => {
        startCircleAnimation();
      }, 800);
    }, 700);
  };

  const DottedCircleAnimation = () => {
    return (
      <svg
        width="150"
        height="150"
        viewBox="0 0 80 80"
        style={{ position: "relative" }}
      >
        <defs>
          <pattern
            id="image"
            x="0"
            y="0"
            patternUnits="userSpaceOnUse"
            width="80"
            height="80"
          >
            <image
              href="https://www.shareicon.net/data/512x512/2015/05/12/37315_coffee_512x512.png"
              width="40"
              height="40"
              x={20}
              y={18}
            />
          </pattern>
        </defs>
        <motion.path
          d="M40 10
             a 30 30 0 0 1 0 60
             a 30 30 0 0 1 0 -60"
          fill="url(#image)"
          stroke="#fff"
          strokeWidth="2"
          strokeDasharray="198"
          strokeDashoffset="198"
          animate={circleAnimationControls}
          transition={{ duration: 3.06 }}
        />
      </svg>
    );
  };
  
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        color: "#fff",
        height: "100vh",
      }}
    >
      <motion.div
        style={{
          width: "600px",
          height: "140px",
          padding: "10px 40px",
          backgroundColor: "#2a79ff",
          borderRadius: "102px",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => startNewOrderAnimation()}
        whileTap={{ scale: 0.8 }}
      >
        <motion.div
          initial={{ x: 180 }}
          animate={newOrderAnimation}
          exit={{ opacity: 0 }}
          onClick={startNewOrderAnimation}
          style={{
            position: "absolute",
          }}
        >
          <h2
            style={{
              fontSize: "52px",
              color: "#fff",
              fontWeight: "700",
              margin: "30px 0px",
            }}
          >
            Order Now
          </h2>
        </motion.div>

        <motion.div
          style={{ position: "absolute", top: "0px" }}
          initial={{ opacity: 0 }}
          animate={cofeeAnimation}
        >
          {DottedCircleAnimation()}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={orderPlacedAnimation}
        >
          <h2
            style={{
              fontSize: "52px",
              color: "#fff",
              fontWeight: "700",
              margin: "30px 0px",
            }}
          >
            Order Placed!
          </h2>
        </motion.div>
        <motion.div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "#fff",
            position: "absolute",
            top: "38px",
            left: "30px",
            zIndex: "10",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
            border: "2px solid green",
          }}
          initial={{ opacity: 0, x: 345, y: -10 }}
          animate={tickAnimation}
        >
          <DoneIcon style={{ color: "green" }} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ButtonAnimation;
