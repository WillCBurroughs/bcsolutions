import React from 'react';
import '../../index.css'

function ItemComponentMobile(props) {
    if(props.orientation == "right"){
        return (
        <div className='ItemComponentMobileRight'>
            <h3 className='ItemHeader'>
                {props.headerText}
            </h3>
            <img src = {props.imageSRC} className= {props.imageClass} alt=""/>
        </div>
        )
    }
    else {
        return(
        <div className='ItemComponentMobile'>
            <img src = {props.imageSRC} className= {props.imageClass} alt=""/>
            <h3 className='ItemHeader'>
                {props.headerText}
            </h3>
        </div>
        )
    }
}

export default ItemComponentMobile;