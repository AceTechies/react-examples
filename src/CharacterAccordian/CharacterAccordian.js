import React, { useState } from "react";
import "./CharacterAccordian.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import { AnimatePresence, motion } from "framer-motion";

function CharacterAccordian() {
  const Card = ({ index, expanded, onClick }) => {
    return (
      <motion.div
        style={{
          margin: "10px",
          width: expanded ? "400px" : "200px",
          overflow: "hidden",
          filter: expanded ? "none" : "grayscale(100%)",
        }}
        initial={{ width: "200px" }}
        onClick={onClick}
        whileTap={{ width: expanded ? "400px" : "200px" }}
        animate={{ width: expanded ? "400px" : "200px" }}
        exit={{ width: "200px" }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <img
            width={400}
            height={400}
            src={`/character${index}.jpeg`}
            alt=""
            style={{ borderRadius: "12px", cursor: "pointer" }}
          />
        </div>
        {expanded && (
          <div>
            <div>
              <div>
                <h1>Character name</h1>
                <p>Character Subtitle</p>
              </div>
              <div></div>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  const [expandedIndex, setExpandedIndex] = useState(1);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  return (
    <div style={{ display: "flex" }}>
      {[1, 2, 3, 4].map((item, index) => (
        <div key={item}>
          <Card
            key={index}
            index={item}
            expanded={item === expandedIndex}
            onClick={() => handleCardClick(item)}
          />
        </div>
      ))}
    </div>
  );
}

export default CharacterAccordian;
