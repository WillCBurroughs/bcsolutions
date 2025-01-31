import DesktopNavbar from './components/molecules/DesktopNavbar';
import './index.css';
import BackgroundDesign from './components/atoms/BackgroundDesign';
import Introducing from './components/atoms/Introducing';
import MainHeader from './components/atoms/MainHeader';

function App() {
  return (
    <>
      <div className="background-layer">
        <BackgroundDesign top="0" />
        <BackgroundDesign top="60" />
        <BackgroundDesign top="120" />
        <BackgroundDesign top="180" />
      </div>
      <div className='content-layer'>
        <DesktopNavbar/>
        <Introducing/>
        <MainHeader/>
      </div>
    </>
  );
}

export default App;
