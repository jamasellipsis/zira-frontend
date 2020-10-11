import React from 'react';
import Menu from './menu'
import { Link } from 'react-router-dom'

const NavbarNologged = () => {
  return (
      <nav className="navbar navbar-expand-lg static-top">
        <div className="container">
          <Link className='navbar-brand' to='/'>
            <img src="http://placehold.it/150x50?text=Logo" alt=""></img>
          </Link>

        </div>
          <Menu/>
      </nav>   
  );
}

export default NavbarNologged;
