import React from 'react';
import '../../index.css'

function ItemComponent(props) {
  return (
    <div className='ItemComponentDesktop'>
        <img src = {props.imageSRC} className= {props.imageClass} alt=""/>
        <h3 className='ItemHeader'>
            {props.headerText}
        </h3>
    </div>
  );
}

export default ItemComponent;