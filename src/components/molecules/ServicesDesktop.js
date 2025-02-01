import React from 'react';
import '../../index.css';
import ServiceDesktopCard from '../atoms/ServiceDesktopCard';

function ServicesDesktop() {
  return (
    <div className='ServicesDesktop'>
        <ServiceDesktopCard/>
        <ServiceDesktopCard/>
        <ServiceDesktopCard/>
    </div>
  );
}

export default ServicesDesktop;