import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginpagecss.css";
import "./register.css";
import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class add extends React.Component{
     
render(){
  return(
    <div>
<center>      
<Form className="first">
  <h1>update address page</h1>
  
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


  
  <Button  className="extra"  variant="primary" type="submit">
    update
  </Button>
  
</Form>
</center>
</div>
  );
}
}
export default add;