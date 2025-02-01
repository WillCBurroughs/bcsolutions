import React from 'react';
import '../../index.css';
import TeamMember from '../atoms/TeamMember';
import will from '../../images/will.png';
import noah from '../../images/noah.png';

function OurTeamDesktop() {
  return (
    <div className='OurTeamDesktop'>
        <TeamMember 
            imageSRC = {will} 
            imgClass = "will"
            headerText = "Will Burroughs"
            JobTitle = "Software Developer"
            JobDescription = "Will is a skilled software developer from Lexington, KY, who graduated from the University of Kentucky. He specializes in coding, problem-solving, and creating efficient, scalable solutions with a passion for innovation."
        />
        <TeamMember
            imageSRC = {noah}
            imgClass = "noah"
            headerText = "Noah Calvert"
            JobTitle = "UI/UX Designer"
            JobDescription = "Noah is a UI/UX designer from Lexington, KY, with expertise in Figma, Adobe, web design, branding, and responsive interfaces. He graduated from the University of Kentucky with a degree in Digital Media Design."
        />
    </div>
  );
}

export default OurTeamDesktop;