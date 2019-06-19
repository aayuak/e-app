import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginpagecss.css";
import "./register.css";
import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class payment extends React.Component{
     
render(){
  return(
    <div>
<center>      
<Form className="first">
  <h1>payment page</h1>
  <Form.Group controlId="formBasicName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="Text" size="sm" placeholder="Enter name" width="5px" />
    
  </Form.Group>
  <br></br>

  <Form.Group controlId="formBasicNumber">
    <Form.Label>Mobile number: </Form.Label>
    <Form.Control  size="sm" placeholder="mob no" />
  </Form.Group>
  <br></br>

  <Form.Group controlId="formBasicAddress">
    <Form.Label>Flat,House no.,Building,Company,Apartment </Form.Label>
    <Form.Control type="Text" size="sm"/>
  </Form.Group>
<br></br>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Area,Colony,Street,Sector,Village: </Form.Label>
    <Form.Control type="Text" size="sm" />
  </Form.Group>
<br></br>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Landmark e.g. near apollo hospital </Form.Label>
    <Form.Control type="Text" size="sm" placeholder="E.g. Near AIIMS Flyover,Behind Regal Cinema,etc." />
  </Form.Group>
<br></br>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Town/City: </Form.Label>
    <Form.Control type="Text" size="sm" placeholder="E.g. Jaipur" />
  </Form.Group>
<br></br>
  <Form.Group>
    <Form.Label>State: </Form.Label>
    <Form.Control type="Text" size="sm" placeholder="E.g. Rajasthan" />
  </Form.Group>
<br></br>


  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="cash on delivery" />
  </Form.Group>
  <a href="http://localhost:3000/Offer">have a promocode ?</a>
  <br></br>
  <br></br>
  <Button  className="extra"  variant="primary" type="submit">
    Proceed for payment
  </Button>
  
</Form>
</center>
</div>
  );
}
}
export default payment;