import React from 'react';
import '../../index.css';
import TeamMemberMobile from '../atoms/TeamMemberMobile';
import will from '../../images/Smallwill.png';
import noah from '../../images/Smallnoah.png';

function OurTeamMobile() {
  return (
    <div className='OurTeamMobile'>
        <TeamMemberMobile 
            imageSRC = {will} 
            imgClass = "willMobile"
            headerText = "Will Burroughs"
            JobTitle = "Software Developer"
            JobDescription = "Will is a skilled software developer from Lexington, KY, who graduated from the University of Kentucky. He specializes in coding, problem-solving, and creating efficient, scalable solutions with a passion for innovation."
        />
        <TeamMemberMobile
            imageSRC = {noah}
            imgClass = "noahMobile"
            headerText = "Noah Calvert"
            JobTitle = "UI/UX Designer"
            JobDescription = "Noah is a UI/UX designer from Lexington, KY, with expertise in Figma, Adobe, web design, branding, and responsive interfaces. He graduated from the University of Kentucky with a degree in Digital Media Design."
        />
    </div>
  );
}

export default OurTeamMobile;