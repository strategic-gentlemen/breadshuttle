import React from 'react';

const logo = '/assets/breadshuttle.png'

const NavBar = (props) => {
  return (
    <div className="nav-container">
      <img src={logo} alt='breadshuttle' />
      <i className="fas fa-bars"></i>
    </div>
  );
}

export default NavBar;