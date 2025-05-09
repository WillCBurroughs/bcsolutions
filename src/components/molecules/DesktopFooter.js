import React from 'react';
import '../../index.css';
import FooterDesktopImage from '../../images/FooterDesktop.svg';

function DesktopFooter() {
  return (
    <div className='BottomFooter'>
        <img src= {FooterDesktopImage} alt='Footer' className="responsive-footer"/>
    </div>
  );
}

export default DesktopFooter;