import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import './Signup.css'
import Axios from 'axios'

class Signup extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: ''
  }

  handleChange = ({target}) => {
    this.setState({[target.name]:target.value,
    error: ''});
}

  handleRegister = e => {
    e.preventDefault();
    if (this.state.name === '' ||this.state.username === '' || this.state.password === '' || this.state.email === '') {
      this.setState({ error: 'All fields are mandatory' });
    }
    else if(this.state.password != this.state.confirmPassword){
      this.setState({ error: 'Passwords do not match' });
    }
    else{
      Axios.post('https://cetroots.herokuapp.com/api/profile/',{
                password: this.state.password,
                email: this.state.email,
                image:null,
                name:this.state.name
            }).then(res => {
                this.setState({ error: '' });
                this.props.history.push('/Login');
            }).catch(err => {
                console.log(err.response);
                if(err.response.data.username){
                  this.setState({
                      error: 'Username already exists', 
                      password: ''
                  })
              }
            });
    }
  }

  render() {
    return (
      <div className="register-container">
        <div className="register-form-container">
          <div className="register-logo-container">
            <img src="images/logo.jpeg" alt="logo" className="register-logo"></img>
          </div>
            <Form>
              <div className="register-form">
              <input className="register-input" type="text" id="name" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                <input className="register-input" type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                <input  className="register-input" type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                <input className="register-input" type="password" name="password" placeholder="Password" id="password" value={this.state.password} onChange={this.handleChange}/>
                <input className="register-input" type="password" name="confirmPassword" placeholder="Confirm Password" id="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
                <span className="register-error" >{this.state.error}</span>
                <input  className="register-button"  type="submit" value="Register" onClick={this.handleRegister} />
              </div>
            </Form>
        </div> 
      </div>
    )
  }
}

export default Signup
