import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import {loginu} from '../../utils/Token'
import './Login.css'
import Axios from 'axios';

class Login extends Component {
        state = {
            username: '',
            password: '',
            error: ''
        }
    

    handleChange = ({target}) => {
        this.setState({[target.name]:target.value,
        error: ''});
    }

    handleLogin = e => {
        e.preventDefault();
        if (this.state.username === '' || this.state.password === '') {
            this.setState({ error: 'Enter username and Password' });
          }
        else{
            Axios.post('https://cetroots.herokuapp.com/api/login-token/',{
                email: this.state.username,
                password: this.state.password
            }).then(res => {
                console.log(res.data);
                loginu(res.data.token);
                this.props.history.push('/myAccount');
            }).catch(err => {
                console.log(this.props.history)
                console.log(err.response);
                console.log(err.response.data.username);
                console.log(err.response.data.non_field_errors);
                if(err.response.data.non_field_errors){
                    this.setState({
                        error: 'Invalid Username or Password', 
                        password: ''
                    })
                }
              });
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-form-container">
                    <div className="login-logo-container">
                        <img src="images/logo.jpeg" alt="logo" className="login-logo"></img>
                    </div>
                    
                    <Form>
                        <div className="login-form">
                            <input className="login-input" type="text" name="username" placeholder="Username" id="username" value={this.state.username} onChange={this.handleChange}/>
                            <input className="login-input" type="password" name="password" placeholder="Password" id="password" value={this.state.password} onChange={this.handleChange}/>
                            
                            <span className="login-error">{this.state.error}</span>
                            <input className="login-button" type="submit" value="Login" onClick={this.handleLogin} />
                        </div>
                    </Form>
                    
                </div>
            </div>
        )
    }
}

export default Login;
