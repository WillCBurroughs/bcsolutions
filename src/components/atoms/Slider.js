import React from "react";
import '../../App.css';

export default function Slider({ label, name, min, max, step, value, onChange }) {
  const calculateProgress = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `${percentage}%`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-start",
      }}
    >
      <label className="slider-label">{label}</label>
      <div className="slider-wrapper">
        <input
          type="range"
          aria-label="Budget"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="slider"
          style={{
            "--progress": calculateProgress(), // Dynamically set the progress percentage
          }}
        />
        <div className="slider-value">${Number(value).toLocaleString()}</div>
      </div>
    </div>
  );
}