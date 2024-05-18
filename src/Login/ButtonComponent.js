import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ButtonComponent.css";

const ButtonComponent = ({activeButton, setActiveButton}) => {
//   const [activeButton, setActiveButton] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    setAnimateKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="button-container">
      {["Phone", "Email", "Social"].map((label, index) => (
        <div key={index} className="button-wrapper">
          <motion.div
            className={`button ${activeButton === index ? "active" : ""}`}
            onClick={() => handleButtonClick(index)}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            {label}
          </motion.div>
          {activeButton === index && (
            <motion.div
              key={animateKey}
              layoutId="underline"
              className="underline"
              initial={{ x: -100 }}
              animate={{
                x: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              <h3 style={{ color: "#fff" }}>
                {activeButton === 0
                  ? "Phone"
                  : activeButton === 1
                  ? "Email"
                  : "Social"}
              </h3>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ButtonComponent;
