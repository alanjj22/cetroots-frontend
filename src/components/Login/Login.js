import React from 'react'
import { Form } from 'react-bootstrap'
import './Login.css'

const Login = () => {
  return (
    <div className="container">
      <div className="logo-container">
          <img src="images/logo.png" alt="logo" className="login-logo"></img>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h1>Login</h1>
          <div className="line"></div>
        </div>
        <div className="login-form">
          <Form className="text-center">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" required="true" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" required="true" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="text-left">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <input type="submit" className="login-button" value="Login"></input>
          </Form>
        </div>
        </div>
    </div>
  )
}

export default Login
