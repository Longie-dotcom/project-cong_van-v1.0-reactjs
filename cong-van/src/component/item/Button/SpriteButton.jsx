import React, { useState } from 'react';

export default function SpriteButton({ 
  assets, 
  onClick, 
  disabled = false, 
  className = "",
  x = 0, 
  y = 0, 
  w = "auto", 
  h = "auto", 
  style = {} 
}) {
  const [btnState, setBtnState] = useState("normal");

  const btnMap = {
    normal: assets.normal,
    hover: assets.hovered,
    click: assets.clicked
  };

  const currentSrc = btnMap[btnState] || btnMap.normal;

  const combinedStyle = {
    position: 'absolute', // Thường nút sprite trong game cần absolute
    left: `${x}px`,
    bottom: `${y}px`,
    width: typeof w === 'number' ? `${w}px` : w,
    height: typeof h === 'number' ? `${h}px` : h,
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: disabled ? 'default' : 'pointer',
    outline: 'none',
    ...style // Merge với style truyền vào nếu có
  };

  return (
    <button
      className={`sprite-button ${className} ${disabled ? "btn-disabled" : ""}`}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setBtnState("hover")}
      onMouseLeave={() => !disabled && setBtnState("normal")}
      onMouseDown={() => !disabled && setBtnState("click")}
      onMouseUp={() => !disabled && setBtnState("hover")}
      disabled={disabled}
      style={combinedStyle}
    >
      <img 
        src={currentSrc} 
        alt="Button" 
        style={{ width: '100%', height: '100%', display: 'block' }} 
      />
    </button>
  );
}