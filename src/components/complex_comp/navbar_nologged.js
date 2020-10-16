import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';
import Login from '../../auth/Login'
import Register from '../../auth/Register'
import { Auth } from 'aws-amplify'
import './navbar_nologged.css';


function NavbarNologged(props) {

  const history = useHistory()

  const logOut = async e => {
    e.preventDefault()
    try {
      Auth.signOut()
      props.auth.setAuthStatus(false)
      props.auth.setUser(null)
    } catch(error) {
      console.log(error)
    }
    history.push("/")
  }

  return (
    <div>
      <Navbar bg="zira" expand="lg" sticky="top">
        <Navbar.Brand href={!props.auth.isAuthenticated ? '/' : '/dashboard'}>
          <img
          alt='ZiraLogo'
          src={require('../../assets/name_and_logo/WhiteLogo.png')}
          width="40"
          height="40"
          className="d-inline-block align-top">
          </img>
        </Navbar.Brand>
        <Navbar.Brand href={!props.auth.isAuthenticated ? '/' : '/dashboard'}>
          <img
          alt='ZiraLogo'
          src={require('../../assets/name_and_logo/WhiteName.png')}
          height="40"
          className="d-inline-block align-top">
          </img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='d-flex justify-content-end' id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end">
            {/* In case the authenticated is null */}
            {!props.auth.isAuthenticated && (
                <>
                  <Link className="light-text nav-link" to='/teach'>Teach</Link>
                  <Link className="light-text nav-link" to='/learn'>Learn</Link>
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
      </Navbar>
    </div>
  );
}

export default NavbarNologged;
