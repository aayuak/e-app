import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import React from 'react';
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
function Offer(){
return(

<left>
<h1 className="aaa">Offer! Offer! Offer!</h1>
  <ListGroup className="okay" className="hehe">
    <h3>ELECTRONICS</h3>
    <ListGroupItem>ELECTRO40<button className="marg">Apply</button></ListGroupItem>
    <ListGroupItem>ELECTRO50<button className="marg">Apply</button></ListGroupItem>
 <br></br>
  <h3>FOOTWEAR</h3>
  <ListGroupItem>FOOTWEA40<button className="marg">Apply</button></ListGroupItem>
  <ListGroupItem>FOOTWEA50<button className="marg">Apply</button></ListGroupItem>
  <br></br>
  <h3>GARMENTS</h3>
  <ListGroupItem>GARMENT40<button className="marg">Apply</button></ListGroupItem>
  <ListGroupItem>GARMENT50<button className="marg">Apply</button></ListGroupItem>
</ListGroup>
</left>
);
}
export default Offer;