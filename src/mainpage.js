import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
//import ReactBootstrap, {Jumbotron,  Col, Grid, Panel, FormGroup} from 'react-bootstrap';
//import "./first/loginpagecss.css";
import "./mainpagecss.css";
//import {Grid ,Image,Icon}from 'semantic-ui-react';
import Carousel from 'react-bootstrap/Carousel'
//import Register from "./registerpage";
// import Blog from "./cardshow.js";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import products from "./First/cardarray";
class Mainpage extends React.Component
{
render()
{
  const cards=products.map((data)=>{
   



return( <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={data.image} />
  <Card.Body>
    <Card.Title>REALME 1 -10,000</Card.Title>
    <Card.Text>
    THIS IS A GREAT BUDGET SMART PHONE WITH 4GB RAM AND 64 GB INTERNAL MEMORY.
      THIS IS A SMART BUY.
    </Card.Text>
    <Button variant="primary">BUY NOW</Button>
  </Card.Body>
</Card>
    
</div>
)
})
  
  console.log("props",this.props.data)
 const {data} =this.props
 console.log("data is this"+data)
     return(

     <div>
       {cards}
     </div>
     

   
  )
}
}
export default Mainpage;