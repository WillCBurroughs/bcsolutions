import React from 'react';
import '../../index.css'

function BenefitCardMobile(props) {
  return (
    <div className='BenefitsCardMobile'>
        <h3 className='BenefitsHeaderMobile'>
            {props.headerText}
        </h3>
        <p className='ParagraphBenefitsCardMobile'>
            {props.paragraphText}
        </p>
        <img src={props.imageSRC} className= {props.imgClass} alt=""/>
    </div>
  );
}

export default BenefitCardMobile;