import Logo from '../../images/Logo.svg'
import '../../index.css'

function LogoNavbar() {
  return (
    <img src = {Logo} width = {"32px"} className='logoImage' alt='BC Solutions Logo' />
  );
}

export default LogoNavbar;