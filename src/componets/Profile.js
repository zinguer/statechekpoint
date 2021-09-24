import React, { Component } from "react";
import Counter from "./Counter";

export default class profile extends Component {
  state = {
    name: "Ahmed",
    bio: "bla bla",
    age: "28",
    date : new Date()
    
  };
  componentDidMount() {
    this.timerid = setInterval(() => {
        this.setState({date:new Date()})
        
    },1000);
  }
  componentWillUnmount() {
clearInterval(this.timerid)
  }
//   handleTime=(t)=>{
//       this.setState=(this.T=t);

//   }

  render() {
    return (
      <>
      
        <p> {this.state.name}</p>
        <p> {this.state.bio}</p>
        <p> {this.state.age}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </>
    );
  }
}
