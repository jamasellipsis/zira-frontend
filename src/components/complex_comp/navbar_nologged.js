import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap';

const NavbarNologged = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <div className="container">
          <Link className='navbar-brand' to='/'>
            <img src="http://placehold.it/150x50?text=Logo" alt=""></img>
          </Link>
          <Navbar.Brand href="/">Zira</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to='/teach'>Teach</Link>
              <Link className="nav-link" to='/learn'>Learn</Link>
              <Link className="nav-link" to='/login'>Login</Link>
              <Link className="nav-link" to='/join'>Join</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>

          /* <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto menu">
              <li className="nav-item active">
                <Link className="nav-link" to='/teach'>Teach
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/learn'>Learn</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/join'>Join</Link>
              </li>
            </ul>
  </div>
          
            </Navbar>

    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     */
  );
}

export default NavbarNologged;
