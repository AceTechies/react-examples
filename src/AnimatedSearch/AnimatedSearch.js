import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

const data = [
  {
    title: "Wildlife Photography",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    src: [
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    title: "Nature Photography",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    src: [
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    title: "Beach Photography",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    src: [
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

function AnimatedSearch() {
  const controls = useAnimation();
  const [searchResult, setSearchResult] = useState(false);
  const [result, setResult] = useState(data);
  const [selectedResult, setSelectedResult] = useState([]);

  const handleInputClick = () => {
    controls.start({
      width: 800,
      transition: {
        duration: 0.8,
      },
    });
    setSearchResult(true);
  };

  const addSelectedResult = (selected) => {
    setSelectedResult([...selectedResult, selected]);
  };

  const getResult = (item) => {
    return (
      <motion.div
        onClick={() => addSelectedResult(item)}
        whileHover={{ scale: 1.02 }}
        style={{ display: "flex", margin: "20px 10px", cursor: "pointer" }}
      >
        <div>
          <h2 style={{ margin: "0px" }}>{item?.title}</h2>
          <p style={{ fontSize: "12px", color: "#888", lineHeight: "22px" }}>
            {item?.subtitle}
          </p>
        </div>
        <div style={{ display: "flex" }}>
          {item?.src.map((src) => {
            return (
              <img
                width={100}
                height={90}
                style={{
                  margin: "2px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
                src={src}
                alt=""
              />
            );
          })}
        </div>
      </motion.div>
    );
  };

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResult(filteredResults);
  };

  return (
    <div style={{ display: "grid", placeItems: "center", marginTop: "40px" }}>
      <motion.div
        initial={{ width: 400 }}
        animate={controls}
        style={{ display: "flex", alignItems: "center", position: "relative" }}
      >
        <div style={{ position: "absolute", top: "10px", display: "flex" }}>
          {selectedResult?.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#222",
                  borderRadius: "42px",
                  color: "#fff",
                  width: "150px",
                  padding: "5px 10px",
                  margin: "0px 5px",
                }}
              >
                <div style={{ marginRight: "5px" }}>
                  <Avatar
                    style={{ width: "30px", height: "30px" }}
                    src={item.src[0]}
                  />
                </div>
                <div>
                  <span style={{ fontSize: "12px" }}>{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>
        <input
          onChange={handleChange}
          onClick={(e) => handleInputClick(e)}
          style={{
            width: "100%",
            height: "40px",
            outlineWidth: "0",
            fontSize: "25px",
            padding: "10px 10px 10px 20px",
            borderRadius: "20px",
            border: "none",
          }}
        />
        <div
          style={{
            width: "102px",
            height: "62px",
            backgroundColor: "#FF204E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "-92px",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <SearchIcon style={{ fontSize: "28px", color: "#fff" }} />
        </div>
      </motion.div>
      {searchResult && (
        <motion.div
          initial={{ opacity: 0 }}
          style={{
            width: "662px",
            height: "420px",
            padding: "10px 20px",
            backgroundColor: "#fff",
            marginTop: "-15px",
            marginLeft: "-98px",
          }}
          animate={{ opacity: 1, transition: { delay: 0.7 } }}
        >
          {result?.map((item) => getResult(item))}
        </motion.div>
      )}
    </div>
  );
}

export default AnimatedSearch;
