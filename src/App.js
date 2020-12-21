import React from 'react';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import Profile from './components/Profile-user/Profile.js';
import Account from './components/Account/Account.js';
import Navbar from './components/Navbar';
import Footer from "./components/Footer/footer.js"
import Feed from "./components/feed.js";
import Publicroute from "./Route/Publicroute"
import Userroute from "./Route/Userroute"
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Publicroute path="/" exact component={Home} />
        <Publicroute path='/LogIn' component={Login} />
        <Publicroute path='/SignUp' component={Signup} />
        <Userroute path='/myAccount' component={Account} />
        <Userroute path='/profile-student' component={Profile}/>
        <Userroute path='/feed' component={Feed}/>
      </Switch>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
