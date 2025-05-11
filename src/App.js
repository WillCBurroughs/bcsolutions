import NavBar from './components/organisms/NavBar';
import './index.css';
import BackgroundDesign from './components/atoms/BackgroundDesign';
import IntroducingArea from './components/molecules/IntroducingArea';
import MainHeader from './components/atoms/MainHeader';
import RadialBlur from './components/atoms/RadialBlur';
import Partnering from './components/atoms/Partnering';
import GetStarted from './components/atoms/GetStarted';
import CreateArea from './components/molecules/CreateArea';
import BenefitsHeader from './components/atoms/BenefitsHeader';
import BenefitsDisplay from './components/organisms/BenefitsDisplay';
import IconHolder from './components/organisms/IconHolder';
import OurTeam from './components/atoms/OurTeam';
import OurTeamDesktop from './components/molecules/OurTeamDesktop';
import ServicesWeOffer from './components/atoms/ServicesWeOffer';
import ServicesDesktop from './components/molecules/ServicesDesktop';
import GetInTouch from './components/atoms/GetInTouch';
import ContactDesktop from './components/molecules/ContactDesktop';
import DesktopFooter from './components/molecules/DesktopFooter';

function App() {
  return (
    <>
      <div className="background-layer">
        <BackgroundDesign top="0" />
        <RadialBlur top = "20"/>
        <BackgroundDesign top="60" />
        <RadialBlur top = "80"/>
        <BackgroundDesign top="120" />
        <RadialBlur top = "140"/>
        <BackgroundDesign top="180" />
        <RadialBlur top = "200"/>
      </div>
      <div className='content-layer'>
        <NavBar/>
        <IntroducingArea/>
        <MainHeader/>
        <Partnering/>
        <GetStarted/>
        <CreateArea/>
        <BenefitsHeader/>
        <BenefitsDisplay/>
        <IconHolder/>
        <OurTeam/> 
        <OurTeamDesktop/>
        <ServicesWeOffer/>
        <ServicesDesktop/>
        <GetInTouch/>
        <ContactDesktop/>
        <DesktopFooter/>
      </div>
    </>
  );
}

export default App;
