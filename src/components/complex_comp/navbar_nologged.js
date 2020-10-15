import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';
import Login from '../../auth/Login'
import Register from '../../auth/Register'
import { Auth } from 'aws-amplify'


function NavbarNologged(props) {

  const logOut = async e => {
    e.preventDefault()
    try {
      Auth.signOut()
      props.auth.setAuthStatus(false)
      props.auth.setUser(null)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <div className="container mr-0">
          <Link className='navbar-brand' to='/'>
            <img src="http://placehold.it/150x50?text=Logo" alt=""></img>
          </Link>
          <Navbar.Brand href="/">Zira</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-end">
            <Nav className="ml-auto">
              {/* In case the authenticated is null */}
              {!props.auth.isAuthenticated && (
                <>
                  <Link className="nav-link" to='/teach'>Teach</Link>
                  <Link className="nav-link" to='/learn'>Learn</Link>
                  <Login auth={props.auth} />
                  <Register/>
                </>
              )}
              {/* In case the authenticated is not null */}
              {props.auth.isAuthenticated && (
                <>
                  <img src={require('../../assets/icons/estrella.png')} alt='star' style={{width: '3%', height: '3%', alignSelf: 'center'}} />
                  <Link className="nav-link" to='/teach'>Create a class</Link>
                  <img src={require('../../assets/icons/globo.png')} alt='star' style={{width: '3%', height: '3%', alignSelf: 'center'}} />
                  <Link className="nav-link" to='/learn'>Find classes</Link>
                  <img src={require('../../assets/icons/calendar.png')} alt='star' style={{width: '3%', height: '3%', alignSelf: 'center'}} />
                  <Link className="nav-link" to='/learn'>Schedule</Link>
                  <Button className="nav-link btn-secondary" onClick={logOut} >Log out</Button>
                </>
              )}

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarNologged;
