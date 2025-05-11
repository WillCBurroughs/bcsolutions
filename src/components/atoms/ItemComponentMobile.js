import React from 'react';
import '../../index.css'

function ItemComponentMobile(props) {
    if(props.orientation == "right"){
        return (
        <div className='ItemComponentMobileRight'>
            <h3 className='ItemHeaderMobile'>
                {props.headerText}
            </h3>
            <span className="dash" />
            <img src = {props.imageSRC} className= {props.imageClass} alt=""/>
        </div>
        )
    }
    else {
        return(
        <div className='ItemComponentMobile'>
            <img src = {props.imageSRC} className= {props.imageClass} alt=""/>
            <span className="dash" />
            <h3 className='ItemHeaderMobile'>
                {props.headerText}
            </h3>
        </div>
        )
    }
}

export default ItemComponentMobile;