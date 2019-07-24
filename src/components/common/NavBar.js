import React from 'react';

const logo = '/assets/breadshuttle.png'

const NavBar = (props) => {
  return (
    <div className="nav-container">
      <img src={logo} alt='breadshuttle' />
      <i class="fas fa-bars"></i>
    </div>
  );
}

export default NavBar;