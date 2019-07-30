import React, { useState } from 'react';
import Drawer from 'react-motion-drawer';
import { Link } from 'react-router-dom';

const logo = '/assets/breadshuttle.png'

const NavBar = (props) => {
  const [ showMenu, toggleShowMenu ] = useState(false);

  const handleMenuToggle = () => {
    if (showMenu) {
      toggleShowMenu(false);
    } else {
      toggleShowMenu(true);
    }
  }

  return (
    <div className="nav-container">
      <img src={logo} alt='breadshuttle' />
      <i 
        className="fas fa-bars"
        onClick={() => handleMenuToggle()}
      />
      <Drawer 
        open={showMenu} 
        width={200}
        right
        className="drawer"
      >
        <ul>
          <Link to='/'>
            <li onClick={handleMenuToggle}>My Lists</li>
          </Link>
          <Link to='/profile'>
            <li onClick={handleMenuToggle}>Profile</li>
          </Link>
          <Link to=''>
            <li onClick={handleMenuToggle}>Logout</li>
          </Link>
        </ul>
      </Drawer>
    </div>
  );
}

export default NavBar;