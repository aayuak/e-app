import React from "react";
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
//import Card from "react-bootstrap/Card";
//import ReactBootstrap, {Jumbotron,  Col, Grid, Panel, FormGroup} from 'react-bootstrap';
//import "./first/loginpagecss.css";
import products from "./cardarray";
import Mainpage from "../mainpage";
import {Grid }from 'semantic-ui-react';

//import "./resister.css";
//import Register from "./registerpage";
class Blog extends React.Component
{


render()
{
const cards=products.map(data=>(
    <Grid.Column>
<Mainpage data={data}></Mainpage>
</Grid.Column>
)
)
return(<div>
      {/* <Header/>   */}
    <br></br>
    <Grid Columns={4} divided>
        <Grid.row>
        {cards}
        </Grid.row>
    </Grid>
    
</div>

)
}
}
export default Blog;