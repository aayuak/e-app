import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Register from "./First/registerpage";
import payment from "./First/paymentpage";
import Sell from "./First/sell";
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import Custom from "./First/customer";
//import Hel from "./First/customer";
import Offer from "./First/offer";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import add from "./First/address";
import Loginpage from "./First/loginpage";
import Mainpage from './mainpage';
import Blog from "./First/cardshow";
import Arrayuse from "./First/arrayuse";
//import Register from "./first/registerpage"


function App() {
  return (
    <Router>

    
      {/* <Loginpage /> */}
      <Switch>
      <Route  exact path="/" component={Loginpage}/>

       <Route path="/register" component={Register}/> 
       <Route path="/payment" component={payment}/>
       <Route path="/selling" component={Sell}/>
       <Route path="/customer_service" component={Custom}/>
      
       <Route path="/Offer" component={Offer}/>
       <Route path="/Address" component={add}/>
       <Route path="/arr" component={Mainpage}/>
       
       
           

      </Switch>
      
    
    </Router>
  );
}

export default App;