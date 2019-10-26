import React from 'react';

const Footer = (props) => {
  return (
    <div className='footer'>
      <button
        onClick={props.onClick}
      >
        {props.buttonTitle}
      </button>
    </div>
  );
}

export default Footer;