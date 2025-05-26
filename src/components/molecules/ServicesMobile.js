import React from 'react';
import '../../index.css';
import ServiceMobileCard from '../atoms/ServiceMobileCard';
import AppImage from '../../images/SmallApp.png';
import RedesignImage from '../../images/SmallRedesign.png';
import WebImage from '../../images/SmallWeb.png';

function ServicesMobile() {
  return (
    <div className='ServicesMobile'>
        <ServiceMobileCard
            headerText = "Web Solutions"
            serviceExplanation = "Crafting stunning, high-performance websites tailored for impact and engagement."
            imageSRC = {WebImage}
            imgClass = "WebIMG"
        />
        <ServiceMobileCard
            headerText = "App Solutions"
            serviceExplanation = "Seamless mobile experiences through innovative design and powerful development."
            imageSRC = {AppImage}
            imgClass = "AppIMG"
            decorationID = "ContactLocation"
        />
        <ServiceMobileCard
            headerText = "Digital Revamp"
            serviceExplanation = "Redesigning and optimizing existing websites and apps for a modern experience."
            imageSRC = {RedesignImage}
            imgClass = "RedesignIMG"
        />
    </div>
  );
}

export default ServicesMobile;