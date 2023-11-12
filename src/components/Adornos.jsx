import React from 'react';
import Box from '@mui/material/Box';

function Square({ text }) {
  const squareStyle = {
    width: "50px",
    height: "50px",
    position: "relative",
    overflow: "hidden",
    color: "gray",
    fontSize: "24px",
    fontWeight: "bold",
    border: "3px solid white",  // Añadido para hacer visible el cuadrado
  };

  const lineStyle = {
    position: "absolute",
    top: "0",
    left: "50%",
    width: "2px",
    height: "100%",
    background: "gray",
    transform: "translateX(-50%) rotate(-45deg)",
  };

  return (
    <Box sx={squareStyle}>
      {text}
      <div style={lineStyle}></div>
    </Box>
  );
}

export default Square;
