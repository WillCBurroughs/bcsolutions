import React from 'react';
import '../../index.css';
import BenefitCardDesktop from '../atoms/BenefitCardDesktop';
import FirstBenefit from '../../images/SmallFirstBenefit.png';
import SecondBenefit from '../../images/SecondBenefit.webp';
import ThirdBenefit from '../../images/SmallThirdBenefit.png';

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
            imageSRC = {SecondBenefit}
            imgClass = "SecondBenefit"
            decorationID = "secondBenefit"
        />
        <BenefitCardDesktop 
            headerText = "User-Focused Experiences"
            paragraphText = "Intuitive, responsive designs built for seamless navigation and high conversions."
            imageSRC = {ThirdBenefit}
            imgClass = "ThirdBenefit"
            decorationID = "thirdBenefit"
        />
    </div>
  );
}

export default BenefitsDesktop;