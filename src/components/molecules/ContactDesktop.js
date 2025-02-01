import React from 'react';
import '../../index.css';
import FormElement from '../atoms/FormElement';

function ContactDesktop() {
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
            />
            <FormElement
                placeholder = "Phone Number"
            />
            <FormElement
                placeholder = "Desired Start Date"
            />
        </div>
        <div className='HoldFormRow'>

        </div>
        <div className='HoldFormRow'>
            
        </div>
        <div className='HoldFormRow'>
            
        </div>
    </div>
  );
}

export default ContactDesktop;