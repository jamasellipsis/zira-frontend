import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Teach from './pages/Teach'
import Learn from './pages/Learn'
import Login from './pages/Login'
import Join from './pages/Join'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/teach' component={Teach}/>
          <Route path='/learn' component={Learn}/>
          <Route path='/login' component={Login}/>
          <Route path='/join' component={Join}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;