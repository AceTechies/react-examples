import React, { useState } from "react";

function Spotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    console.log(e);
    const { clientX, clientY } = e;
    const x = parseInt((clientX / window.innerWidth) * 100);
    const y = parseInt((clientY / window.innerHeight) * 100);
    setMousePosition({ x, y });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      <div
        className="mask"
        style={{
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          mask: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), transparent 100px, black 180px)`,
          WebkitMask: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), transparent 40px, black 150px)`,
          zIndex: 1,
        }}
      />
      <img
        src="https://images.unsplash.com/photo-1563589173312-476d8c36b242?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
    </div>
  );
}

export default Spotlight;
