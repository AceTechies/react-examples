import React from "react";
import "./Yoga.css";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

var tempString =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum has been the industry's standard.";
const tempData = [1, 2, 3, 4];
function Yoga() {
  const firstSection = (id, index) => {
    return (
      <div>
        <div>
          <div className="yoga_title">
            <div>
              <h1>YoGA</h1>
              <h2>Asana</h2>
            </div>
          </div>
          <div className="yoga_buttons_container">
            <button className="yoga_buttons">Yoga</button>
            <button className="yoga_buttons">Mindful</button>
            <button className="yoga_buttons">Meditation</button>
          </div>
        </div>
        <div className="yoga_section1_imagecontainer">
          <img
            width={350}
            height={450}
            src={`/${id}.png`}
            alt="A London skyscraper"
          />
        </div>
        <div className="yoga_asan_main_container">
          <div>
            <h3>Pranayama</h3>
          </div>
          <div>
            <h3>Meditation</h3>
          </div>
          <div>
            <h3>Mindfulness</h3>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            margin: "20px 0px",
            right: "0px",
          }}
        >
          {showCurrentPage(index)}
        </div>
      </div>
    );
  };
  const secondSection = (id, index) => {
    return (
      <div className="yoga_seconsection">
        <div className="yoga_section_detailsContainer">
          <div style={{ display: "flex", alignItems: "end" }}>
            <div style={{ width: "40px", border: "1px solid black" }} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ margin: "10px 0px" }}>Read More</h4>
              <LaunchIcon style={{ fontSize: "16px", margin: "0px 10px" }} />
            </div>
          </div>
          <img width={520} height={600} src={`/${id}.png`} alt="" />
        </div>
        <div className="yoga_second_section_tagsContainer">
          <div>
            <h3>Begineer</h3>
          </div>
          <div>
            <h3>Intermediate</h3>
          </div>
          <div>
            <h3>Advanced</h3>
          </div>
        </div>
        <div className="yoga_section_detailsContainer">
          <div>
            <div style={{ width: "40px", border: "1px solid black" }} />
            <h2>WELCOME</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
          </div>
          <img width={720} height={700} src={`/${id + 1}.png`} alt="" />
        </div>
        <div
          style={{ position: "absolute", bottom: "0px", margin: "20px 0px" }}
        >
          {showCurrentPage(index)}
        </div>
      </div>
    );
  };
  const thirdSection = (id, index) => {
    return (
      <div>
        <div className="yoga_thirdSection">
          <div>
            <div style={{ marginLeft: "10px" }}>
              {detailsSection("Private Sessions", tempString)}
            </div>
            <div style={{ marginLeft: "-50px" }}>
              <img width={450} height={450} src={`/${id + 1}.png`} alt="" />
            </div>
          </div>
          <div>
            <img width={500} height={500} src={`/${id}.png`} alt="" />
            <div style={{ marginLeft: "60px" }}>
              {detailsSection("Corporate Sessions", tempString)}
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            margin: "20px 0px",
            right: "0px",
          }}
        >
          {showCurrentPage(index)}
        </div>
      </div>
    );
  };
  const fourthSection = (id, index) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 20px",
        }}
      >
        <div>
          <motion.img
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            width={500}
            height={500}
            src={`/${id + 2}.png`}
            alt=""
          />
          <div style={{ marginLeft: "60px" }}>
            {detailsSection("Extensive Yoga", tempString)}
          </div>
        </div>
        <div>
          <motion.img
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            width={500}
            height={500}
            src={`/${id + 1}.png`}
            alt=""
          />
          <div style={{ marginLeft: "60px" }}>
            {detailsSection("Meditation Sessions", tempString)}
          </div>
        </div>
        <div>
          <motion.img
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            width={500}
            height={500}
            src={`/${id + 3}.png`}
            alt=""
          />
          <div style={{ marginLeft: "60px" }}>
            {detailsSection("Corporate Sessions", tempString)}
          </div>
        </div>
        <div
          style={{ position: "absolute", bottom: "0px", margin: "20px 0px" }}
        >
          {showCurrentPage(index)}
        </div>
      </div>
    );
  };
  const detailsSection = (title, subtitle) => {
    return (
      <div className="yoga_details_section">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5>Discover</h5>
          <ArrowForwardIcon style={{ margin: "0px 10px", fontSize: "16px" }} />
        </div>
      </div>
    );
  };

  var backgroundSelectedStyle = {
    margin: "0px 10px",
    backgroundColor: "#222",
    padding: "10px 15px",
    borderRadius: "50%",
    color: "#fff",
  };

  var backgroundUnselectedStyle = {
    margin: "0px 10px",
    padding: "10px 15px",
  };

  const showCurrentPage = (index) => {
    return (
      <div style={{ display: "flex" }}>
        {tempData.map((data) => {
          return (
            <div
              style={
                index === data
                  ? backgroundSelectedStyle
                  : backgroundUnselectedStyle
              }
            >
              <h4 style={{ margin: "0px" }}>{data}</h4>
            </div>
          );
        })}
      </div>
    );
  };

  function Image({ id }) {
    switch (id) {
      case 1:
        return firstSection(id, 1);

      case 2:
        return secondSection(id, 2);

      case 3:
        return thirdSection(id + 1, 3);

      case 4:
        return fourthSection(id + 1, 4);

      default:
        break;
    }
  }

  return (
    <div>
      <div className="yoga_topbar_container">
        <div className="yoga_logo_container">
          <img
            width={120}
            src="https://cdn.dribbble.com/users/1177896/screenshots/16573048/media/16e5ab6f06b5b7bf73c926433ee24658.png"
            alt=""
          />
        </div>
        <div className="yoga_topbar_details_container">
          <div>
            <h3>Mindful Yoga</h3>
          </div>
          <div>
            <img
              width={40}
              src="https://cdn-icons-png.flaticon.com/512/12314/12314153.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="yoga_container">
        <div class="yoga_main_section">
          {tempData.map((image) => (
            <div class="yoga_main_section_image">
              <Image id={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Yoga;
