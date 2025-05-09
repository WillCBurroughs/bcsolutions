import '../../App.css';
import useWindowSize from '../../hooks/UseWindowSize';
import CreateMobile from '../atoms/CreateMobile';
import Create from '../atoms/Create';


function CreateArea() {
    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <CreateMobile /> : <Create />}
        </>
    );
}

export default CreateArea;