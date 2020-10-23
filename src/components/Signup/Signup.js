import React from 'react'
import { Form,Col, Dropdown } from 'react-bootstrap'
import './Signup.css'
import Datefrom from './Datefrom'

const Signup = () => {
  return (
    <div className="container">
      <div className="register-form-container">
        <div className="form-header">
          <h1>Signup</h1>
          <div className="line"></div>
        </div>
        <div className="register-form">
          <Form className="text-center">
            <Form.Row>
              <Form.Group as={Col} >
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress2">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group >
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group >
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridState" className="select-department">
                <Form.Control as="select" defaultValue="Select department">
                  <option disabled="true">Select department</option>
                  <option>Computer Science And Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Electrical Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Electronics And Communication Engineering</option>
                  <option>Architecture</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} className="text-left">
                <Form.Label className="p-3">Starting Year</Form.Label>
                <Datefrom className="from-year"/>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="p-3">Starting Year</Form.Label>
                <Datefrom></Datefrom>
              </Form.Group>
            </Form.Row>
            <input type="submit" className="register-button" value="Register"></input>
          </Form>
          </div>
        </div>
        <div className="register-logo-container">
          <img src="images/logo.png" alt="logo" className="register-logo"></img>
        </div>
    </div>
  )
}

export default Signup


          
        


