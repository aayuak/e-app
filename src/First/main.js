import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/papercss/dist/paper.css'
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ProgressBar } from 'react-bootstrap/Button';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      text:"",
      arr: []
    };
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    /*this.aescsorting = this.aescsorting.bind(this);
    this.descsorting = this.descsorting.bind(this);
    this.datesort = this.datesort.bind(this);
    this.selectsort = this.selectsort.bind(this);
*/
  }


  //show list
  item() {
    return this.state.arr.map((its, i) =>
      <div key={i}>
        {/* <ProgressBar now={60} />; */}
         {/* <li onDoubleClick={() => { this.pinstat(i) }} onClick={() => { this.changeStatus(i) }} className={(its.status) ? "ll paper-btn btn-block" : "l1 paper-btn btn-block btn-success"}>  */}
          <li>
          {its.title}
          <br></br>
          <span>{its.text}</span>
          {/* {(its.pinstatus === "true") ? <FontAwesomeIcon icon={faThumbtack} /> : ""} */}


        </li>
      </div>)
  }

  //add the list  
  setValue() {
    if (this.state.newValue) {
      var pp = this.state.arr;
      pp.push({
        title: this.state.newValue,
        text:this.state.newValue
        
      });
      
      this.setState(
        { arr: pp, newValue: "" }
      );
      //axios.get('http://localhost:8080/tasks')
 //.then((res)=>{
     //do something with response
   //  console.log(res);
 
      
    }
    // empty the field
    let i = document.getElementById("hi");
    i.value = "";

  }



  //changeStatus
/*  changeStatus(i) {
    let c = this.state.count;
    let a = this.state.arr
    a[i].status = !a[i].status;
    c = (a[i].status) ? c -= 1 : c += 1
    this.setState({ arr: a, count: c })
    //console.log(this.state.arr)
  }*/
  //take the textfield value
  getValue(event) {
    if (event.target.value !== "" && event.target.value.trim()) {
      this.setState(
        { newValue: event.target.value });
    }
  }
  //increment the value
  /*len() {
    return this.state.arr.length;
  }*/
  //move list up
  /*uplist(i) {
    let uparr = this.state.arr
    if (uparr[i - 1] !== undefined) {
      let current = uparr[i]
      uparr[i] = uparr[i - 1]
      uparr[i - 1] = current
      this.setState({ arr: uparr })
      console.log(this.state.arr);
    }
  }
  //move list down
  downlist(i) {
    let downarr = this.state.arr
    if (downarr[i + 1] !== undefined) {

      [downarr[i], downarr[i + 1]] = [downarr[i + 1], downarr[i]]
      this.setState({ arr: downarr })
    }
  }
  //remove element
  deletelist(i) {
    let dele = this.state.arr
    dele.splice(i, 1);
    this.setState({ arr: dele })
  }
  //sorting in aesc
  aescsorting() {
    let arrsort = this.state.arr;
    let s = arrsort.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    this.setState({ arr: s })
  }

  //sorting in desc
  descsorting() {
    let arrsortd = this.state.arr;
    let t = arrsortd.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
    this.setState({ arr: t })
  }
  //sorting date
  datesort() {
    let arrsortdate = this.state.arr;
    let z = arrsortdate.sort((a, b) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0)
    this.setState({ arr: z })
  }
  //sort by selected
  selectsort() {
    let arrsortselect = this.state.arr;
    console.log(arrsortselect)
    let z = arrsortselect.sort((a, b) => a.status === false ? -1 : b.status === false ? 1 : 0)
    this.setState({ arr: z })
  }


  //pinststus
  pinstat(i) {
    let pinarr = this.state.arr;
    let c = this.state.cpin
    let ss = (pinarr[i].pinstatus === "false") ? "true" : "false"
    pinarr[i].pinstatus = ss
    if (ss === "true") {
      let pin = pinarr[i];
      pinarr[i] = pinarr[c]
      pinarr[c] = pin
      c += 1
    }
    else { c -= 1 }
    this.setState({ arr: pinarr, cpin: c })
  }
*/
  render() {
    return (<div className="todo">
      <h1 className="row flex-center">{this.props.title}</h1>
      <input className="row flex-center" type="text" id="hi" onChange={this.getValue} />
      <button className="row flex-center" onClick={this.setValue}>Submit</button>
      <div className="row flex-center">
        <button onClick={this.aescsorting}>AescSort</button>
        <button onClick={this.descsorting}>DescSort</button>
        <button onClick={this.datesort}>DateSort</button>
        <button onClick={this.selectsort}>SelectSort</button>
      </div>
      <h2 className="row flex-center">Total Items : {this.state.count}/{this.len()}</h2>
      <ul>
        {this.item()}
      </ul>
    </div>
    );
  }
}


export default App;
