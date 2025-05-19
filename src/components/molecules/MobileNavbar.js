import '../../index.css';
import AboutUsMobile from '../../images/AboutUsMobile.svg';
import BenefitsMobile from '../../images/BenefitsMobile.svg';
import ContactUs from '../../images/ContactUs.svg';
import HomeMobile from '../../images/HomeMobile.svg';
import ServicesMobile from '../../images/ServicesMobile.svg';

function MobileNavbar(){
    return(
        <div className='mobileNavbar'>
            <a href="#value" aria-label="View value section"><img src= {BenefitsMobile} alt=""/></a>
            <a href="#team" aria-label="View team section"><img src= {AboutUsMobile} alt=""/></a>
            <a href="#introducing" aria-label="View Services section"><img src= {HomeMobile} alt=""/></a>
            <a href="#services" aria-label="View Services section"><img src= {ServicesMobile} alt=""/></a>
            <a href="#ContactPlace" aria-label="View Contact section"><img src= {ContactUs} alt=""/></a>
        </div>
    )
}

export default MobileNavbar;