import '../../index.css';
import AboutUsMobile from '../../images/AboutUsMobile.svg';
import BenefitsMobile from '../../images/BenefitsMobile.svg';
import ContactUs from '../../images/ContactUs.svg';
import HomeMobile from '../../images/HomeMobile.svg';
import ServicesMobile from '../../images/ServicesMobile.svg';

function MobileNavbar(){
    return(
        <div className='mobileNavbar'>
            <a href="#value"><img src= {BenefitsMobile}/></a>
            <a href="#team"><img src= {AboutUsMobile}/></a>
            <a href="#introducing"><img src= {HomeMobile}/></a>
            <a href="#services"><img src= {ServicesMobile}/></a>
            <a href="#ContactPlace"><img src= {ContactUs}/></a>
        </div>
    )
}

export default MobileNavbar;