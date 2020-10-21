import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Teach from './pages/Teach'
import Learn from './pages/Learn'
import Dashboard from './pages/Dashboard'
import Class from './pages/Class'
import CreateClass from './pages/CreateClass'
import Navbar from './components/complex_comp/navbar_nologged'
import Footer from './components/complex_comp/footer'
import { Auth } from 'aws-amplify'
import ApiUsers from './api/Users'
import './App.css';


class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null,
    userData: null
  }

  setAuthStatus = authenticated => {
    this.setState({isAuthenticated: authenticated})
  }

  setUser = user => {
    this.setState({user: user})
  }

  setUserData = user => {
    this.setState({userData: user})
  }

  async componentDidMount() {
    try{
      await Auth.currentSession()
      this.setAuthStatus(true)
      const user = await Auth.currentAuthenticatedUser()
      ApiUsers.getUserByName(user.attributes.name).then((res) => {this.setUserData(res.data[0])})
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
      userData: this.state.userData,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
      setUserData: this.setUserData
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
            <Route path='/dashboard' exact render={(props) => <Dashboard {...props} auth={authProps}/>}/>
            <Route path='/class/:idClass' exact render={(props) => <Class {...props} auth={authProps}/>}/>
            <Route path='/createclass' exact render={(props) => <CreateClass {...props} auth={authProps}/>}/>
          </Switch>
           <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;