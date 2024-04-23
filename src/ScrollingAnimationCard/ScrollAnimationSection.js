import React from "react";
import { motion } from "framer-motion";
import "./ScrollAnimation.css";

function ScrollAnimationSection() {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const hue = (h) => `hsl(${h}, 100%, 50%)`;

  function Card({ src, hueA, hueB }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
    console.log(src);
    return (
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="splash" style={{ background }} />
        <motion.div className="card" variants={cardVariants}>
          <img src={src} alt="" style={{ width: "100%", height: "100%" }} />
        </motion.div>
      </motion.div>
    );
  }

  const movies = [
    [
      "https://e1.pxfuel.com/desktop-wallpaper/49/663/desktop-wallpaper-new-movie-posters-hollywood-movie-2022.jpg",
      340,
      10,
    ],
    [
      "https://getwallpapers.com/wallpaper/full/9/e/3/1267880-download-free-movie-poster-wallpaper-2560x1920-for-1080p.jpg",
      20,
      40,
    ],
    [
      "https://rukminim2.flixcart.com/image/850/1000/jnc2bgw0/poster/c/h/b/medium-hollywood-movie-wall-poster-the-dark-tower-hd-quality-original-imafaff5pmwhe63n.jpeg?q=90&crop=false",
      60,
      90,
    ],
    [
      "https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg",
      80,
      120,
    ],
    ["https://wallpapercave.com/wp/wp1945933.jpg", 100, 140],
    [
      "https://rukminim2.flixcart.com/image/850/1000/jnc2bgw0/poster/f/j/w/medium-hollywood-movie-wall-poster-blade-runner-hd-quality-original-imafayznzhctuega.jpeg?q=20&crop=false",
      205,
      245,
    ],
    [
      "https://rukminim2.flixcart.com/image/850/1000/l0cr4i80/poster/r/v/p/medium-movie-star-war-wallpaper-hd-poster-star-wars-death-star-original-imagc5yjkswev2sz.jpeg?q=20&crop=false",
      260,
      290,
    ],
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf12R3ZpXvhZa0YivysfHQihdCe9dMNLzYllLUF1by6g&s",
      290,
      320,
    ],
  ];

  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      {movies.map(([src, hueA, hueB]) => {
        return <Card src={src} hueA={hueA} hueB={hueB} key={src} />;
      })}
    </div>
  );
}

export default ScrollAnimationSection;
