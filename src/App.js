import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Teach from './pages/Teach'
import Learn from './pages/Learn'
import Navbar from './components/complex_comp/navbar_nologged'
import { Auth } from 'aws-amplify'

import './App.css';

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({isAuthenticated: authenticated})
  }

  setUser = user => {
    this.setState({user: user})
  }

  async componentDidMount() {
    try{
      const session = await Auth.currentSession()
      this.setAuthStatus(true)
      console.log(session)
      const user = await Auth.currentAuthenticatedUser()
      this.setUser(user)
    } catch(error){
      console.log(error)
    }
    this.setState({ isAuthenticating: false})
  }


  render () {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
    return (
      !this.state.isAuthenticating && 
      <Router>
        <div className="App">
          <Navbar auth={authProps} />
          <Switch>
            <Route path='/' exact render={(props) => <Home {...props} auth={authProps}/>} />
            <Route path='/teach' exact render={(props) => <Teach {...props} auth={authProps}/>}/>
            <Route path='/learn' exact render={(props) => <Learn {...props} auth={authProps}/>}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;