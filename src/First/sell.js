import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginpagecss.css";
import "./register.css";
import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


class Sell extends React.Component{
     
render(){
  return(
    
   <div>

  <br></br>
  <h1 className="hi">Why sell on Azon?</h1>
  <br>
  </br>
 
   <Container>
     <Row>
       <Col><h1>E-Commerce:
  Your next big sales channel</h1>
       <img width="200px" src="https://m.media-amazon.com/images/G/01/marketplace-creative/sandbox/SOA_Desktop_Computer_Rupee._CB1547829431_.svg">
       </img>
       <p>Start selling on Amazon - without building a website. Register on our Marketplace, Amazon.in, to start selling.</p>
  </Col>
<Col><h1>Reach crores of customers</h1>
<img width="200px" src="https://m.media-amazon.com/images/G/01/marketplace-creative/Icons-2018/Customer_Segments.svg"></img>
     <p>Sell to crores of engaged customer visiting Amazon.in on desktop and through our mobile app.</p>                  
                       
                        </Col>
  <Col><h1>Receive timely payments</h1>
  <img width="200px" src="https://m.media-amazon.com/images/G/01/marketplace-creative/sandbox/Money-Rupee._CB1547829674_.svg"></img>
<p>Amazon ensures your payments are deposited directly in your bank account within 7 days.</p> 
 </Col>
 </Row>
 </Container>
  <center>
    <div className="btn-group btn-group-justified">
  <Link to="/selling"><Button className="btn btn-primary">Start selling</Button></Link>
  </div>
  </center>
  

 
  </div>
  );
}
}
export default Sell;