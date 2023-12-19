import React from "react";

function Gradient({ to = "top", color = "#0c0c0c", color2 = "transparent" }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `linear-gradient(to ${to}, ${color}, ${color2})`,
      }}
    />
  );
}

export default Gradient;