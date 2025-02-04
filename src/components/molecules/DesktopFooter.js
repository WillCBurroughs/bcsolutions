import React from 'react';
import '../../index.css';
import FooterDesktopImage from '../../images/FooterDesktop.svg';

function DesktopFooter() {
  return (
    <div className='BottomFooter'>
        <img src= {FooterDesktopImage}/>
    </div>
  );
}

export default DesktopFooter;