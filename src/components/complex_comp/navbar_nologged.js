import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';
import Login from '../../auth/Login'
import Register from '../../auth/Register'
import { Auth } from 'aws-amplify'
import './navbar_nologged.css';


function NavbarNologged(props) {
  const [openSignUp, setOpenSignUp] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const history = useHistory()

  const logOut = async e => {
    e.preventDefault()
    try {
      Auth.signOut()
      props.auth.setAuthStatus(false)
      props.auth.setUser(null)
      props.auth.setUserData(null)
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
          <Nav className="ml-auto justify-content-end">
            {/* In case the authenticated is null */}
            {!props.auth.isAuthenticated && (
                <>
                  <Nav.Link className="light-text nav-link m-auto" to='/teach'>Teach</Nav.Link>
                  <Nav.Link className="light-text nav-link m-auto" to='/learn'>Learn</Nav.Link>
                  <Button className="nav-link btnSend mx-auto my-1" onClick={() => setOpenLogin(true)}>Log in</Button>
                  <Login auth={props.auth} openModal={openLogin} setOpenModal={setOpenLogin} />
                  <Button className="nav-link mx-lg-2 mx-auto btnSignup my-1 mt-1" onClick={() => setOpenSignUp(true)}>Sign Up</Button>
                  <Register buttonName='Sign up' openModal={openSignUp} setOpenModal={setOpenSignUp}/>
                </>
            )}
            {/* In case the authenticated is not null */}
            {props.auth.isAuthenticated && (
              <>
                <img src={require('../../assets/icons/create.svg')} alt='star' style={{width: '3%', height: '3%', alignSelf: 'center'}} />
                <Link className="nav-link light-text" to='/teach'>Create a class</Link>
                <img src={require('../../assets/icons/search.svg')} alt='star' style={{width: '3%', height: '3%', alignSelf: 'center'}} />
                <Link className="nav-link light-text" to='/learn'>Find classes</Link>
                <img src={require('../../assets/icons/calendar.svg')} alt='star' style={{width: '3%', height: '3%', alignSelf: 'center'}} />
                <Link className="nav-link light-text" to='/learn'>Schedule</Link>
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
