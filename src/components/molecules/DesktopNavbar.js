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
      <HeaderNavbar headerText="home" />
      <HeaderNavbar headerText="services" />
      <HeaderNavbar headerText="value" />
      <HeaderNavbar headerText="about" />
    </div>
    <div class="navbar-right">
      <div class="contact-btn">Contact us</div>
    </div>
  </div>
  );
}

export default DesktopNavbar;