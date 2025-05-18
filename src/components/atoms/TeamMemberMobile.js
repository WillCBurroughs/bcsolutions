import React from 'react';
import '../../index.css'

function TeamMemberMobile(props) {
  return (
    <div className='TeamMemberMobile'>
        <div className="TopMemberDecorationsMobile" id = {props.decorationID}>
            <div className="TopLeftDecoration"></div>
            <div className="TopRightDecoration"></div>
        </div>
        <img src={props.imageSRC} className= {props.imgClass} alt='Team Member'/>

        <div className='holdTextMemberMobile'>
            <h3 className='TeamMemberNameMobile'>
                {props.headerText}
            </h3>
            <p className='JobTitleMobile'>
                {props.JobTitle}
            </p>
            <p className='JobDescriptionMobile'>
                {props.JobDescription}
            </p>
        </div>
        <div className="bottomMemberDecorationsMobile" id = {props.decorationID}>
            <div className="bottomLeftMemberDecoration"></div>
            <div className="bottomRightMemberDecoration"></div>
        </div>
    </div>
  );
}

export default TeamMemberMobile;