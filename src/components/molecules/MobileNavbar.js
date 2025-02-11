import '../../index.css';
import AboutUsMobile from '../../images/AboutUsMobile.svg';
import BenefitsMobile from '../../images/BenefitsMobile.svg';
import ContactUs from '../../images/ContactUs.svg';
import HomeMobile from '../../images/HomeMobile.svg';
import ServicesMobile from '../../images/ServicesMobile.svg';

function MobileNavbar(){
    return(
        <div className='mobileNavbar'>
            <img src= {BenefitsMobile}/>
            <img src= {AboutUsMobile}/>
            <img src= {HomeMobile}/>
            <img src= {ServicesMobile}/>
            <img src= {ContactUs}/>
        </div>
    )
}

export default MobileNavbar;