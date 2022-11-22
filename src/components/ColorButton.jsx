import React from "react";

const ColorButton = ({ bgColor, setbgColor }) => {
  const colors = ["red", "green", "purple", "blue", "black"];
  const handleClick = (e) => {
    setbgColor(e.target.value);
  };
  return (
    <div>
      {colors.map((color, idx) => (
        <button
          key={idx}
          onClick={handleClick}
          value={color}
          className={`btn btn-${color} 
            ${color === bgColor ? "btn-active" : "null"}`}
        ></button>
      ))}
    </div>
  );
};

export default ColorButton;
