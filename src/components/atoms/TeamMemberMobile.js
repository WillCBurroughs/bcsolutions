import React from 'react';
import '../../index.css'

function TeamMemberMobile(props) {
  return (
    <div className='TeamMemberMobile'>
        <div className="TopMemberDecorations" id = {props.decorationID}>
            <div className="TopLeftDecoration"></div>
            <div className="TopRightDecoration"></div>
        </div>
        <img src={props.imageSRC} className= {props.imgClass} alt='Team Member'/>

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
        <div className="bottomMemberDecorations" id = {props.decorationID}>
            <div className="bottomLeftMemberDecoration"></div>
            <div className="bottomRightMemberDecoration"></div>
        </div>
    </div>
  );
}

export default TeamMemberMobile;