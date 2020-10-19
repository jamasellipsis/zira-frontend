import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Form, Navbar, Nav, Button } from 'react-bootstrap';
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
      <Navbar bg="zira" expand="md" sticky="top">
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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* In case the authenticated is null */}
            {!props.auth.isAuthenticated && (
                <>
                  <Nav.Link className="light-text nav-link m-auto" to='/teach'>Teach</Nav.Link>
                  <Nav.Link className="light-text nav-link m-auto" to='/learn'>Learn</Nav.Link>
                  <Login auth={props.auth}/>
                  <Register/>
                </>
              )}
              {/* In case the authenticated is not null */}
              {props.auth.isAuthenticated && (
                <>
                  <img src={require('../../assets/icons/create.svg')} alt='star' style={{width: '3%', height: '3%', alignSelf: 'center'}} />
                  <Nav.Link className="nav-link light-text" to='/teach'>Create a class</Nav.Link>
                  <img src={require('../../assets/icons/search.svg')} alt='star' style={{width: '3%', height: '3%', alignSelf: 'center'}} />
                  <Nav.Link className="nav-link light-text" to='/learn'>Find classes</Nav.Link>
                  <img src={require('../../assets/icons/calendar.svg')} alt='star' style={{width: '3%', height: '3%', alignSelf: 'center'}} />
                  <Nav.Link className="nav-link light-text" to='/learn'>Schedule</Nav.Link>
                  <Button className="nav-link btn-primary btnSend" onClick={logOut} >Log out</Button>
                </>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarNologged;
