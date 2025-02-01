import React from 'react';
import '../../index.css';
import TeamMember from '../atoms/TeamMember';
import will from '../../images/will.png';

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
        <TeamMember/>
    </div>
  );
}

export default OurTeamDesktop;