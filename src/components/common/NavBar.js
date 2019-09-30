import React, { useState } from 'react';
import Drawer from 'react-motion-drawer';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const logo = '/assets/breadshuttle.png'

const NavBar = (props) => {
  const [ showMenu, toggleShowMenu ] = useState(false);

  const handleMenuToggle = (route) => {
    if (showMenu) {
      toggleShowMenu(false);
      if (route) {
        props.push(route)
      }
    } else {
      toggleShowMenu(true);
    }
  }

  return (
    <div className="nav-container">
      <img src={logo} alt='breadshuttle' />
      <h3>Bread Shuttle</h3>
      <i 
        className="fas fa-user"
        onClick={() => handleMenuToggle()}
      />
      <Drawer 
        open={showMenu} 
        width={200}
        right
        className="drawer"
      >
        <ul>
          <li onClick={() => handleMenuToggle('/')}>My Lists</li>
          <li onClick={() => handleMenuToggle('/profile')}>Profile</li>
          <li onClick={() => handleMenuToggle('/')}>Logout</li>
        </ul>
      </Drawer>
    </div>
  );
}

export default connect(null, { push })(NavBar);