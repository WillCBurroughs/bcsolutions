import DesktopNavbar from './components/molecules/DesktopNavbar';
import './index.css';
import BackgroundDesign from './components/atoms/BackgroundDesign';
import Introducing from './components/atoms/Introducing';
import MainHeader from './components/atoms/MainHeader';
import RadialBlur from './components/atoms/RadialBlur';
import Partnering from './components/atoms/Partnering';
import GetStarted from './components/atoms/GetStarted';
import Create from './components/atoms/Create';
import BenefitsHeader from './components/atoms/BenefitsHeader';
import BenefitsDesktop from './components/molecules/BenefitsDesktop';
import DesktopIconHolder from './components/molecules/DesktopIconHolder';
import OurTeam from './components/atoms/OurTeam';

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
        <DesktopNavbar/>
        <Introducing/>
        <MainHeader/>
        <Partnering/>
        <GetStarted/>
        <Create/>
        <BenefitsHeader/>
        <BenefitsDesktop/>
        <DesktopIconHolder/>
        <OurTeam/> 
      </div>
    </>
  );
}

export default App;
