import React from 'react';
import '../../index.css';
import FormElement from '../atoms/FormElement';

function ContactDesktop() {
  return (
    <div className='ContactDesktop'>
        <div className='HoldFormRow'>
            <FormElement 
                placeholder = "Hello"
            />
            <FormElement/>
            <FormElement/>
        </div>
        <div className='HoldFormRow'>
            <FormElement/>
            <FormElement/>
            <FormElement/>
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