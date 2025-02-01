import React from 'react';
import '../../index.css'

function TeamMember(props) {
  return (
    <div className='TeamMemberDesktop'>
        <div className="TopMemberDecorations" id = {props.decorationID}>
            <div className="TopLeftDecoration"></div>
            <div className="TopRightDecoration"></div>
        </div>
        <img src={props.imageSRC} className= {props.imgClass}/>
        <h3 className='TeamMemberName'>
            {props.headerText}
        </h3>
        <p className='JobTitle'>
            {props.JobTitle}
        </p>
        <p className='JobDescription'>
            {props.JobDescription}
        </p>
        <div className="bottomMemberDecorations" id = {props.decorationID}>
            <div className="bottomLeftMemberDecoration"></div>
            <div className="bottomRightMemberDecoration"></div>
        </div>
    </div>
  );
}

export default TeamMember;