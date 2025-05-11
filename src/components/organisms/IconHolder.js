import '../../App.css';
import useWindowSize from '../../hooks/UseWindowSize';
import DesktopIconHolder from '../molecules/DesktopIconHolder';
import MobileIconHolder from '../molecules/MobileIconHolder';


function IconHolder() {
    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <MobileIconHolder /> : <DesktopIconHolder />}
        </>
    );
}

export default IconHolder;