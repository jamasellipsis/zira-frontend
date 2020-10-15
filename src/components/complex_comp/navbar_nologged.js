import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap';
import './navbar_nologged.css';

const NavbarNologged = () => {
  return (
    <div>
      <Navbar bg="zira" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          <img
          alt='ZiraLogo'
          src={require('../../assets/name_and_logo/WhiteLogo.png')}
          width="40"
          height="40"
          className="d-inline-block align-top">
          </img>
        </Navbar.Brand>
        <Navbar.Brand href="/">
          <img
          alt='ZiraLogo'
          src={require('../../assets/name_and_logo/WhiteName.png')}
          height="40"
          className="d-inline-block align-top">
          </img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link navbar-font" to='/teach'>Teach</Link>
            <Link className="nav-link navbar-font" to='/learn'>Learn</Link>
            <Link className="nav-link navbar-font" to='/login'>Login</Link>
            <Link className="nav-link navbar-font" to='/join'>Join</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarNologged;
