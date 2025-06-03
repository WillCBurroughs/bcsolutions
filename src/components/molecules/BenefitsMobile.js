import React from 'react';
import '../../index.css';
import BenefitCardMobile from '../atoms/BenefitCardMobile';
import FirstBenefit from '../../images/SmallFirstBenefit.webp';
import SecondBenefit from '../../images/SecondBenefit_50.webp';
import ThirdBenefit from '../../images/SmallThirdBenefit.webp';

function BenefitsMobile() {
  return (
    <div className='BenefitsMobile'>
        <BenefitCardMobile 
            headerText = "SEO Optimization"
            paragraphText = "Rank higher and drive traffic with tailored SEO strategies."
            imageSRC = {FirstBenefit}
            imgClass = "FirstBenefit"
        />
        <BenefitCardMobile 
            headerText = "Custom Designs"
            paragraphText = "Unique, tailored designs that elevate your brand and captivate audiences."
            imageSRC = {SecondBenefit}
            imgClass = "SecondBenefitMobile"
            decorationID = "secondBenefit"
        />
        <BenefitCardMobile 
            headerText = "User-Focused Experiences"
            paragraphText = "Intuitive, responsive designs built for seamless navigation and high conversions."
            imageSRC = {ThirdBenefit}
            imgClass = "ThirdBenefit"
            decorationID = "thirdBenefit"
        />
    </div>
  );
}

export default BenefitsMobile;