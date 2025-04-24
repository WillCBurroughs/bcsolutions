import React from 'react';
import '../../index.css';
import Background from "../../images/Background.svg";

function BackgroundDesign(props) {
  return (
    <img
      src={Background}
      width="100%"
      className="backgroundImage"
      style={{ marginTop: `${props.top}%` }} 
      alt=""
    />
  );
}

export default BackgroundDesign;