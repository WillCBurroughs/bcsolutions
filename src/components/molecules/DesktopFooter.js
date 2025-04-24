import React from 'react';
import '../../index.css';
import FooterDesktopImage from '../../images/FooterDesktop.svg';

function DesktopFooter() {
  return (
    <div className='BottomFooter'>
        <img src= {FooterDesktopImage} alt='Footer'/>
    </div>
  );
}

export default DesktopFooter;