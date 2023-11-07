import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorListVisible, setColorListVisible] = useState(false);

  const handleButtonClick = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <div className="big-box" style={{ backgroundColor: selectedColor }}>
        <div className="color-list">
          {isColorListVisible &&
            colors.map((color, index) => (
              <div
                key={index}
                className="color-item"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
        </div>
        <button onClick={handleButtonClick}>Pick a color</button>
      </div>
    </div>
  );
};

export default ColorPicker;
