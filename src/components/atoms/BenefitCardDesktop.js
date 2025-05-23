import React from 'react';
import '../../index.css'

function BenefitCardDesktop(props) {
  return (
    <div className='BenefitCardDesktop'>
        <h3 className='HeaderBenefitsCard'>
            {props.headerText}
        </h3>
        <p className='ParagraphBenefitsCard'>
            {props.paragraphText}
        </p>
        <img src={props.imageSRC} className= {props.imgClass} alt="" loading='lazy'/>
        <div className="bottomDecorations" id = {props.decorationID}>
            <div className="bottomLeftDecoration"></div>
            <div className="bottomRightDecoration"></div>
        </div>
    </div>
  );
}

export default BenefitCardDesktop;