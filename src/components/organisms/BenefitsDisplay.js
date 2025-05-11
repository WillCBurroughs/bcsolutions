import '../../App.css';
import useWindowSize from '../../hooks/UseWindowSize';
import BenefitsDesktop from '../molecules/BenefitsDesktop';
import BenefitsMobile from '../molecules/BenefitsMobile';


function BenefitsDisplay() {
    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <BenefitsMobile /> : <BenefitsDesktop />}
        </>
    );
}

export default BenefitsDisplay;