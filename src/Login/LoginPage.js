import React, { useCallback, useEffect, useState } from "react";
import { motion, MotionConfig, useAnimation } from "framer-motion";
import { Button, MenuItem, Select } from "@mui/material";
import "./LoginPage.css";
import EmailIcon from "@mui/icons-material/Email";
import ButtonComponent from "./ButtonComponent";

const data = [
  {
    src: "https://images.unsplash.com/photo-1715454969547-a69afff2a701?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "Paitylyn Koremurug",
    jobtitle: "Fire Player",
  },
  {
    src: "https://images.unsplash.com/photo-1593697909703-ff9b5f47c4af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "Korelyn kremilin",
    jobtitle: "Youtube Creator",
  },
  {
    src: "https://images.unsplash.com/photo-1495791185843-c73f2269f669?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    name: "Hymsia himaru",
    jobtitle: "Youtube Creator",
  },
];

function LoginPage() {
  const [currImage, setCurrImage] = useState(0);
  const phoneAnimation = useAnimation();
  const emailAnimation = useAnimation();
  const socialAnimation = useAnimation();
  const variants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 100 },
    exiting: { x: -100, opacity: 0 },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImage((value) => {
        if (data.length - 1 === value) {
          return 0;
        }
        return value + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const autoCarousel = () => {
    return (
      <div style={{ padding: "10px", position: "relative", color: "#fff" }}>
        {data.map(
          (item, index) =>
            index === currImage && (
              <MotionConfig transition={{ duration: 1.02 }}>
                <motion.div
                  key={index}
                  style={{ maxWidth: "60vw", height: "97vh" }}
                  initial="hidden"
                  animate="visible"
                  exit="exiting"
                  variants={variants}
                >
                  <img
                    style={{
                      width: "60vw",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "22px",
                    }}
                    src={item.src}
                    alt=""
                  />
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: "50px",
                      width: "900px",
                      margin: "10px 20px",
                      zIndex: "1",

                      transition: { ease: "easeIn", duration: 1.05 },
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "34px",
                        color: "#fff",
                        fontWeight: "500",
                      }}
                    >
                      "{item.details}"
                    </h1>
                    <div>
                      <h2 style={{ fontSize: "22px", fontWeight: "600" }}>
                        {item.name}
                      </h2>
                    </div>
                    <div>
                      <p style={{ opacity: "0.8" }}>{item.jobtitle}</p>
                    </div>
                  </motion.div>
                  <div
                    style={{
                      width: "950px",
                      height: "300px",
                      backgroundColor: "#222",
                      position: "absolute",
                      bottom: "10px",
                      opacity: "0.05",
                    }}
                  />
                </motion.div>
              </MotionConfig>
            )
        )}
      </div>
    );
  };

  const [currButtonSelcted, setCurrButtonSelcted] = useState(0);
  const handleClick = useCallback(
    async (buttonIndex) => {
      if (buttonIndex === 0) {
        await emailAnimation.start({
          opacity: 0,
          zIndex: 0,
          display: "none",
          transition: { duration: 0.5 },
        });
        await socialAnimation.start({
          opacity: 0,
          zIndex: 0,
          display: "none",
          transition: { duration: 0.5 },
        });
        await phoneAnimation.start({
          opacity: 1,
          zIndex: 1,
          display: "block",
          transition: { duration: 0.5 },
        });
      } else if (buttonIndex === 1) {
        await phoneAnimation.start({
          opacity: 0,
          zIndex: 0,
          display: "none",
          transition: { duration: 0.5 },
        });
        await socialAnimation.start({
          opacity: 0,
          zIndex: 0,
          display: "none",
          transition: { duration: 0.5 },
        });
        await emailAnimation.start({
          opacity: 1,
          zIndex: 1,
          y: 0,
          display: "block",
          transition: { duration: 0.5 },
        });
      } else {
        await phoneAnimation.start({
          opacity: 0,
          zIndex: 0,
          display: "none",
          transition: { duration: 0.5 },
        });
        await emailAnimation.start({
          opacity: 0,
          zIndex: 0,
          display: "none",
          transition: { duration: 0.5 },
        });
        await socialAnimation.start({
          opacity: 1,
          zIndex: 1,
          y: 0,
          display: "block",
          transition: { duration: 0.5 },
        });
      }
      setCurrButtonSelcted(buttonIndex);
    },
    [emailAnimation, phoneAnimation, socialAnimation, setCurrButtonSelcted]
  );

  useEffect(() => {
    handleClick(currButtonSelcted);
  }, [currButtonSelcted, handleClick]);

  const getLoginDetails = () => {
    return (
      <div style={{ padding: "20px 50px" }}>
        <div>
          <img
            width={100}
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143708/1113-768x591.png"
            alt=""
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            height: "350px",
            position: "relative",
          }}
        >
          <div>
            <h1>Join Us on your Creator Journey</h1>
            <p style={{ width: "30vw" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <ButtonComponent
            activeButton={currButtonSelcted}
            setActiveButton={setCurrButtonSelcted}
          />
          {getPhoneLogin()}
          {emailLogin()}
          {socialLogin()}
        </div>
      </div>
    );
  };

  const [countryCode, setCountryCode] = useState(91);
  const handleChange = (event) => {
    setCountryCode(event.target.value);
  };

  const getPhoneLogin = () => {
    return (
      <motion.div
        animate={phoneAnimation}
        style={{
          margin: "30px 0px",
          position: "absolute",
          bottom: "-160px",
          left: "50px",
        }}
      >
        <div>
          <h5 style={{ margin: "10px 0px" }}>Phone Number</h5>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={countryCode}
              label="Age"
              onChange={handleChange}
              sx={{
                padding: "0px",
                height: "40px",

                borderRadius: "12px",
              }}
            >
              <MenuItem value={91}>+91</MenuItem>
              <MenuItem value={20}>+62</MenuItem>
              <MenuItem value={30}>+12</MenuItem>
            </Select>
          </div>
          <div style={{ margin: "0px 10px" }}>
            <input
              type="tel"
              style={{
                padding: "10px",
                height: "20px",
                outline: "0",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                fontSize: "16px",
                width: "350px",
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          <Button className="get_otp_button">Get OTP</Button>
        </div>
      </motion.div>
    );
  };

  const emailLogin = () => {
    return (
      <motion.div
        initial={{ opacity: 0, zIndex: 0, y: 0, display: "none" }}
        animate={emailAnimation}
        style={{ position: "absolute", bottom: "-130px", left: "50px" }}
      >
        <div>
          <h5 style={{ margin: "10px 0px" }}>Email ID</h5>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <EmailIcon style={{ fontSize: "32px", marginRight: "10px" }} />
          <input
            type="text"
            style={{
              padding: "10px",
              height: "20px",
              outline: "0",
              borderRadius: "12px",
              border: "1px solid lightgrey",
              fontSize: "16px",
              width: "350px",
            }}
          />
        </div>
        <div style={{ marginTop: "50px" }}>
          <Button className="get_otp_button">Send Email</Button>
        </div>
      </motion.div>
    );
  };

  const socialLogin = () => {
    return (
      <motion.div
        animate={socialAnimation}
        initial={{
          opacity: 0,
          zIndex: -1,
          y: 0,
          position: "absolute",
          bottom: "-180px",
          left: "100px",
        }}
      >
        <Button
          style={{ backgroundColor: "#222", color: "#fff" }}
          className="google_sign_in"
        >
          {" "}
          <img
            width={40}
            style={{ marginRight: "10px" }}
            src="./google.png"
            alt=""
          />
          Google Sign In
        </Button>

        <Button
          style={{ backgroundColor: "#2e77d8c4", color: "#fff" }}
          className="google_sign_in"
        >
          <img
            width={40}
            style={{ marginRight: "10px" }}
            src="./facebook.png"
            alt=""
          />{" "}
          Facebook Sign In
        </Button>
      </motion.div>
    );
  };

  return (
    <div style={{ backgroundColor: "#fff", display: "flex" }}>
      {autoCarousel()}
      {getLoginDetails()}
    </div>
  );
}

export default LoginPage;
