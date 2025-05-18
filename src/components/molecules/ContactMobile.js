import React, { useState } from "react";
import '../../index.css';
import FormElement from '../atoms/FormElement';
import Slider from '../atoms/Slider';
import emailjs from "emailjs-com";

function ContactMobile() {

    const [formData, setFormData] = useState({
        name: "",
        title: "",
        company: "",
        email: "",
        phone: "",
        start: "",
        password: "",
        budget: 30000,
        details: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value || "" });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
          to_name: "BC Solutions",
          from_name: formData.name || "Anonymous",
          title: formData.title,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          start: formData.start,
          budget: formData.budget,
          details: formData.details,
        };

        emailjs
        .send(
          "service_xgykx3f", 
          "template_klgxy7c", 
          templateParams,
          "ImurMEug4XMvpWKeh" 
        )
        .then(
          (response) => {
            alert("Email sent successfully!");
            console.log("Email sent successfully:", response.status, response.text);
          },
          (err) => {
            alert("Failed to send email.");
            console.error("Failed to send email:", err);
          }
        );
    };

  return (
    <div className='ContactMobile'>
        <div className='HoldFormRow'>
            <FormElement 
                placeholder="Name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
            />
        </div>
        <div className='HoldFormRow'>
            <FormElement
                placeholder="Title"
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
            />
        </div>
        <div className='HoldFormRow'>
            <FormElement
                placeholder="Company"
                name="company"
                value={formData.company || ""}
                onChange={handleChange}
            />
        </div>
        <div className='HoldFormRow'>
            <FormElement
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email || ""}
                onChange={handleChange}
            />
        </div>
        <div className='HoldFormRow'>
            <FormElement
                placeholder="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone || ""}
                onChange={handleChange}
            />
        </div>
        <div className='HoldFormRow'>
            <FormElement
                placeholder="Desired Start Date"
                name="start"
                value={formData.start || ""}
                onChange={handleChange}
            />
        </div>
        <div className='FullRowMobile'>
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
            name="details" 
            rows="5" 
            cols="40" 
            placeholder="Project Details"
            class="form-input"
            value={formData.details || ""}
            onChange={handleChange}
        ></textarea>
        </div>
        <div className='HoldSubmit'>
            <button type="submit" className="SubmitContact" onClick={handleSubmit} >
                Submit 
            </button>
        </div>
    </div>
  );
}

export default ContactMobile;