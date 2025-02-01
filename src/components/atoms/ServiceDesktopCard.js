import React from 'react';
import '../../index.css'

function ServiceDesktopCard(props) {
  return (
    <div className='ServiceDesktopCard'>
        <div className="TopServiceDecorations" id = {props.decorationID}>
            <div className="TopLeftDecoration"></div>
            <div className="TopRightDecoration"></div>
        </div>
        <img src={props.imageSRC} className= {props.imgClass}/>

        <div className='holdTextMember'>
            <h3 className='TeamMemberName'>
                {props.headerText}
            </h3>
            <p className='JobTitle'>
                {props.JobTitle}
            </p>
            <p className='JobDescription'>
                {props.JobDescription}
            </p>
        </div>
        <div className="bottomServiceDecorations" id = {props.decorationID}>
            <div className="bottomLeftMemberDecoration"></div>
            <div className="bottomRightMemberDecoration"></div>
        </div>
    </div>
  );
}

export default ServiceDesktopCard;