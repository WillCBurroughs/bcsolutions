import '../../App.css';
import useWindowSize from '../../hooks/UseWindowSize';
import IntroducingMobile from '../atoms/IntroducingMobile';
import Introducing from '../atoms/Introducing';


function IntroducingArea() {
    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <IntroducingMobile /> : <Introducing />}
        </>
    );
}

export default IntroducingArea;