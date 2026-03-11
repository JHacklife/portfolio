import React from "react";

/**
 * Gradient Overlay Component
 * 
 * Professional gradient overlay for images and cards.
 * Uses the new color palette for consistency.
 */

function Gradient({ 
  to = "top", 
  color = "#0a0a0f",  // Updated to match new dark background
  color2 = "transparent",
  opacity = 1 
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `linear-gradient(to ${to}, ${color}, ${color2})`,
        opacity: opacity,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}

export default Gradient;
