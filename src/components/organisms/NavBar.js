import '../../App.css';
import useWindowSize from '../../hooks/UseWindowSize';
import DesktopNavbar from '../molecules/DesktopNavbar';
import MobileNavbar from '../molecules/MobileNavbar';


function NavBar() {
    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        </>
    );
}

export default NavBar;