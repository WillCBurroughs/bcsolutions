import DesktopNavbar from './components/molecules/DesktopNavbar';
import './index.css';
import BackgroundDesign from './components/atoms/BackgroundDesign';

function App() {
  return (
    <>
      <DesktopNavbar/>
      <BackgroundDesign/> 
      <BackgroundDesign top="60" /> 
      <BackgroundDesign top="120"/> 
      <BackgroundDesign top="180"/> 
    </>
  );
}

export default App;
