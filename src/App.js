import React from 'react';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import Profile from './components/Profile-user/Profile.js';
import Account from './components/Account/Account.js';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/LogIn' component={Login} />
        <Route path='/SignUp' component={Signup} />
        <Route path='/myAccount' component={Account} />
        <Route path='/profile-student' component={Profile}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
