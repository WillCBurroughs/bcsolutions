import React from 'react';
import '../../index.css'

function HeaderNavbar(props) {
  return (
    <h3 className='headerElement'>{props.headerText}</h3>
  );
}

export default HeaderNavbar;