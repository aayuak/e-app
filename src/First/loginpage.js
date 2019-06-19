import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import "./loginpagecss.css";
import "./register.css";
import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class Loginpage extends React.Component{
     
render(){
  return(
    <div>
      <center>
<Form className="first">
  <h1 className="first">Azon</h1>
  <br></br>
  <img className="comm" src="https://cdn-images-1.medium.com/max/1200/1*eUFJ5BNpw3xSZxK3BhVHxw.jpeg"></img>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  className="extra"  variant="primary" type="submit">
    LOGIN
  </Button>
  <Link to="/register"><Button variant="primary">REGISTER</Button></Link>
  <Link to="/payment"><Button variant="ternary">PAY</Button></Link>
  <Link to="/selling"><Button variant="secondary">sell here</Button></Link>
  
  
</Form>
</center> 
</div>
  );
}
}
export default Loginpage;