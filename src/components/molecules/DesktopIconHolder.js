import React from 'react';
import '../../index.css';
import ItemComponent from '../atoms/ItemComponent';
import CustomDesign from '../../images/CustomDesigns.png';
import SpeedPerformance from '../../images/SpeedPerformance.png';
import SeamlessUI from '../../images/SeamlessUI.png'
import FullService from '../../images/FullService.png'
import ResultsDriven from '../../images/ResultsDriven.png'
import ClearCommunication from '../../images/ClearCommunitcation.png'

function DesktopIconHolder() {
  return (
    <div className='DesktopIconHolder'>
        <ItemComponent imageSRC={CustomDesign} imageClass= "holdImage" headerText = "Custom Designs"/>
        <ItemComponent imageSRC={SpeedPerformance} imageClass="holdImage" headerText = "Speed & Performance"/>
        <ItemComponent imageSRC={SeamlessUI} imageClass="holdImage" headerText = "Seamless UX"/>
        <ItemComponent imageSRC={FullService} imageClass="holdImage" headerText = "Full-Service Solutions"/>
        <ItemComponent imageSRC={ResultsDriven} imageClass="holdImage" headerText = "Results Driven"/>
        <ItemComponent imageSRC={ClearCommunication} imageClass="holdImage" headerText = "Clear Communication"/>
    </div>
  );
}

export default DesktopIconHolder;