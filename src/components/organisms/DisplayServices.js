import '../../App.css';
import useWindowSize from '../../hooks/UseWindowSize';
import ServicesDesktop from '../molecules/ServicesDesktop';
import ServicesMobile from '../molecules/ServicesMobile';


function DisplayServices() {
    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <ServicesMobile /> : <ServicesDesktop />}
        </>
    );
}

export default DisplayServices;