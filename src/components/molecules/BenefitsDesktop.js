import React from 'react';
import '../../index.css';
import BenefitCardDesktop from '../atoms/BenefitCardDesktop';
import FirstBenefit from '../../images/FirstBenefit.png';

function BenefitsDesktop() {
  return (
    <div className='BenefitsDesktop'>
        <BenefitCardDesktop 
            headerText = "SEO Optimization"
            paragraphText = "Rank higher and drive traffic with tailored SEO strategies."
            imageSRC = {FirstBenefit}
            imgClass = "FirstBenefit"
        />
        <BenefitCardDesktop 
            headerText = "Custom Designs"
            paragraphText = "Unique, tailored designs that elevate your brand and captivate audiences."
        />
        <BenefitCardDesktop 
            headerText = "User-Focused Experiences"
            paragraphText = "Intuitive, responsive designs built for seamless navigation and high conversions."
        />
    </div>
  );
}

export default BenefitsDesktop;