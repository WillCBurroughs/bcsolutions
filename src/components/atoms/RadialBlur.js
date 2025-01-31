import React from 'react';
import '../../index.css';

function RadialBlur(props) {
  return (
     <div
        className="blurredCircle"
        style={{ marginTop: `${props.top}%` }} 
      ></div>
  );
}

export default RadialBlur;