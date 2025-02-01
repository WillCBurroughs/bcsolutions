import '../../App.css';
import React from 'react';

export default function FormElement({ label, type = "text", name, value, onChange, className, placeholder }) {
  return (
    <div className="form-element">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className= {className || "form-input"}
        placeholder= {placeholder}
        autoComplete="off"
      />
      <label className="form-label">{label}</label>
      <div className='FormCircle'></div>
    </div>
  );
}