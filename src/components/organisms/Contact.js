import '../../App.css';
import useWindowSize from '../../hooks/UseWindowSize';
import ContactDesktop from '../molecules/ContactDesktop';
import ContactMobile from '../molecules/ContactMobile';


function Contact() {
    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <ContactMobile /> : <ContactDesktop />}
        </>
    );
}

export default Contact;