import '../../App.css';
import useWindowSize from '../../hooks/UseWindowSize';
import OurTeamDesktop from '../molecules/OurTeamDesktop';
import OurTeamMobile from '../molecules/OurTeamMobile';


function NavBar() {
    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <OurTeamMobile /> : <OurTeamDesktop />}
        </>
    );
}

export default NavBar;