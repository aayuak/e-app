import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginpagecss.css";
import "./register.css";
import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContent from 'react-bootstrap/TabContent';
import TabContainer from 'react-bootstrap/TabContainer';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup'



function Custom(){
     

  return(
    
   <div>

  <br></br>
  <h1 className="hi">Hi, Ayush. What can we help you with?</h1>
  <br>
  </br>
 
   <Container>
     <Row>
       <Col>
       <img width="200px" src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/cs/help/images/gateway/manage-address._CB292186245_.png"></img>
       <a href="http://localhost:3000/payment" ><h4>manage address</h4></a>
        </Col>
<Col>
<img width="210px" src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/cs/help/images/gateway/IN-your-account._CB292186245_.png"></img>
    <a href="http://localhost:3000/Account"><h4>Account setting</h4></a>                 
                       
                        </Col>
  <Col>
    <img width="300px" src="http://dslsa.org/ndd/wp-content/uploads/2015/08/helpline_icon.jpg"></img>
<a href="http://localhost:3000/Helpline"><h4>Helpline</h4></a> 
 </Col>
 </Row>
 </Container>
 <br>
 </br>
 <br>
 </br>
 <h1 className="hihi">we are always with you</h1>
</div>


  );
}


export default Custom;