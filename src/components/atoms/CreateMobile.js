import mobileImage from '../../images/CreateMobileHighRes.webp'
import '../../index.css'

function CreateMobile() {
  return (
    <img src = {mobileImage} fetchpriority="high" width = {"100%"} className='CreateMobile' alt="" />
  );
}

export default CreateMobile;