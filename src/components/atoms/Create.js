import TestImage from '../../images/HeaderHome.png'
import '../../index.css'

function Create() {
  return (
    <img src = {TestImage} width = {"70%"} className='Create' alt="" loading='lazy' />
  );
}

export default Create;