import HeaderNavbar from "../atoms/HeaderNavbar";
import LogoNavbar from "../atoms/LogoNavbar";
import '../../index.css'

function DesktopNavbar() {
  return (
  <div className="desktopNavbar">
    <div class="navbar-left">
      <div class="logo"><LogoNavbar/></div>
    </div>
    <div class="navbar-center">
      <a href="#introducing"><HeaderNavbar headerText="home" /></a>
      <a href="#services"><HeaderNavbar headerText="services"/></a>
      <a href="#value"><HeaderNavbar headerText="value" /> </a>
      <a href="#team"><HeaderNavbar headerText="about" /> </a>
    </div>
    <div class="navbar-right">
      <a href="#ContactPlace"><div class="contact-btn">Contact us</div></a>
    </div>
  </div>
  );
}

export default DesktopNavbar;