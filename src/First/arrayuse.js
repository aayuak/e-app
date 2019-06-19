import React from "react";
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import {Grid,Segment,Button,Header,Message,Form,Icon} from 'semantic-ui-react';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
//import ReactBootstrap, {Jumbotron,  Col, Grid, Panel, FormGroup} from 'react-bootstrap';
// import "./First/loginpagecss.css";
import products from "./cardarray";
//import "./resister.css";
import Register from "./registerpage.js";
 class Arrayuse extends React.Component{
    
     getList1=(e)=>
     {
         this.image=e.target.value;
     }
     getList2=(e)=>
     {
         this.title=e.target.value;
     }
     getList3=(e)=>
     {
         this.price=e.target.value;
     }
     getList4=(e)=>
     {
         this.text=e.target.value;
     }
     
     setList=()=>

     {
         let object={ image:this.image,title:this.title,text:this.text}
         products.push(object);

     }
     render()
     {
       return(<Grid textAlign="center" verticalAlign="middle">
           <Grid.Column style={{maxWidth:450}}>
               <Header as='h2' icon color="white" textAlign="center">
                   <Icon name="blogger" color="yellow" />
                </Header>
                <br/>
                <br/>
                <Form size="large">
                    <Segment stacked>
         <Form.Input fluid name="Id" icon="idcard" iconPosition="left"
         placeholder="ID" type="text" onChange={this.getlist}/>
         <Form.Input fluid name="image" icon="imagecard" iconPosition="left"
          type="text" onChange={this.getlist1}/>
         <Form.Input fluid name="name" icon="namecard" iconPosition="left"
         placeholder="ID" type="text" onChange={this.getlist2}/>
         <Form.Input fluid name="price" icon="pricecard" iconPosition="left"
         placeholder="ID" type="text" onChange={this.getlist3}/>
         <Form.Input fluid name="description" icon="descriptioncard" iconPosition="left"
         placeholder="ID" type="text" onChange={this.getlist4}/>
         <Form.Input fluid name="button" icon="buttoncard" iconPosition="left"
         placeholder="ID" type="button" onChange={this.getlist5}/>
         <Link to="/home"><button onClick={this.setList}>submit</button></Link>
         </Segment>

         </Form>
           </Grid.Column>
           </Grid>
           


         
       )
     }
 }
 export default Arrayuse;