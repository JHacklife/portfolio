import React from 'react';
import Box from '@mui/material/Box';

function Square({ text, color = "white" }) {
  const squareStyle = {
    width: "50px",
    height: "50px",
    position: "relative",
    overflow: "hidden",
    fontSize: "24px",
    fontWeight: "bold",
    border: `1px solid ${color}`,  // Añadido para hacer visible el cuadrado
  };

  const crossStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "1px",
    background: color,
    transform: "translate(-50%, -50%) rotate(-45deg)",
  };

  const crossDiagonalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "1px",
    background: color,
    transform: "translate(-50%, -50%) rotate(45deg)",
  };

  return (
    <Box sx={squareStyle}>
      {text}
      <div style={crossStyle}></div>
      <div style={crossDiagonalStyle}></div>
    </Box>
  );
}

export default Square;
