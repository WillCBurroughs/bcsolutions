import React from 'react';
import '../../index.css'

function ServiceDesktopCard(props) {
  return (
    <div className='ServiceDesktopCard'>
        <div className="TopServiceDecorations" id = {props.decorationID}>
            <div className="TopLeftDecoration"></div>
            <div className="TopRightDecoration"></div>
        </div>

        <div className='holdTextService'>
            <h3 className='ServiceOffered'>
                {props.headerText}
            </h3>
            <p className='ServiceExplanation'>
                {props.serviceExplanation}
            </p>
            <img src={props.imageSRC} className= {props.imgClass} alt='Service Desktop IMG'/>
        </div>
        <div className="bottomServiceDecorations" id = {props.decorationID}>
            <div className="bottomLeftMemberDecoration"></div>
            <div className="bottomRightMemberDecoration"></div>
        </div>
    </div>
  );
}

export default ServiceDesktopCard;