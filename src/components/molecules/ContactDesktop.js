import React, { useState } from "react";
import '../../index.css';
import FormElement from '../atoms/FormElement';
import Slider from '../atoms/Slider';

function ContactDesktop() {

    const [formData, setFormData] = useState({
        name: "",
        title: "",
        company: "",
        email: "",
        phone: "",
        start: "",
        password: "",
        budget: 10000,
        details: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

  return (
    <div className='ContactDesktop'>
        <div className='HoldFormRow'>
            <FormElement 
                placeholder = "Name"
            />
            <FormElement
                placeholder = "Title"
            />
            <FormElement
                placeholder = "Company"
            />
        </div>
        <div className='HoldFormRow'>
            <FormElement
                placeholder = "Email"
                type = "email"
            />
            <FormElement
                placeholder = "Phone Number"
                type = "tel"
            />
            <FormElement
                placeholder = "Desired Start Date"
            />
        </div>
        <div className='FullRow'>
            <Slider
                label="Budget"
                name="budget"
                min="1000"
                max="50000"
                step="1000"
                value={formData.budget}
                onChange={handleChange}
            />
        </div>
        <div className='HoldFormRow'>
        <textarea 
            id="message" 
            name="message" 
            rows="5" 
            cols="40" 
            placeholder="Project Details"
            class="form-input"
        ></textarea>
        </div>
        <div className='HoldSubmit'>
            <button className="SubmitContact">
                Submit 
            </button>
        </div>
    </div>
  );
}

export default ContactDesktop;