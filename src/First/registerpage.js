import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./register.css";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';



function Register()
{
    return(
      
 <div >
     <center>
     <Form  className="second">
         <h1>THIS IS REGISTER PAGE</h1>

         <Form.Group controlId="formBasicEmail">
    <Form.Label>NAME</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
    <Form.Text className="text-muted">
      ALL CAPITAL PLEASE:
    </Form.Text>
  </Form.Group>


  <Form.Group controlId="formBasicEmail">
    <Form.Label>EMAIL OR MOBILE</Form.Label>
    <Form.Control type="text" placeholder="Enter email/Mobile" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>SET PASSWORD</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Link to="/cardshow">
  <Button variant="primary" type="submit">
    VERIFY
  </Button>
  </Link>
  LOGIN BY:
  <Link to="https://www.facebook.com/">
  <Button className="extra" variant="primary" >FACEBOOK
    <br></br>
  </Button>
  </Link>
  
  <Button  variant="primary" >GOOGLE
    
  </Button>
 
</Form>
</center>
</div>
 
        )
}
export default Register;