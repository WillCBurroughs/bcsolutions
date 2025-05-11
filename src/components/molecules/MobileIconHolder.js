import React from 'react';
import '../../index.css';
import ItemComponentMobile from '../atoms/ItemComponentMobile';
import CustomDesign from '../../images/CustomDesigns.png';
import SpeedPerformance from '../../images/SpeedPerformance.png';
import SeamlessUI from '../../images/SeamlessUI.png'
import FullService from '../../images/FullService.png'
import ResultsDriven from '../../images/ResultsDriven.png'
import ClearCommunication from '../../images/ClearCommunitcation.png'

function MobileIconHolder() {
  return (
    <div className='MobileIconHolder'>
        <ItemComponentMobile imageSRC={CustomDesign} imageClass= "holdImageMobile" headerText = "Custom Designs"/>
        <ItemComponentMobile imageSRC={SpeedPerformance} imageClass="holdImageMobile" headerText = "Speed & Performance" orientation = "right"/>
        <ItemComponentMobile imageSRC={SeamlessUI} imageClass="holdImageMobile" headerText = "Seamless UX"/>
        <ItemComponentMobile imageSRC={FullService} imageClass="holdImageMobile" headerText = "Full-Service Solutions" orientation = "right"/>
        <ItemComponentMobile imageSRC={ResultsDriven} imageClass="holdImageMobile" headerText = "Results Driven"/>
        <ItemComponentMobile imageSRC={ClearCommunication} imageClass="holdImageMobile" headerText = "Clear Communication" orientation = "right"/>
    </div>
  );
}

export default MobileIconHolder;