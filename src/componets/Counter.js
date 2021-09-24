import React, { Component } from 'react'

export default class Counter extends Component {
        state ={
    time : 0 , 
    name : 'ahmed'
  }

  tickHandler = ()=>{
    this.setState({time : this.state.time + 1})

    return this.state.time
  }

  componentDidMount(){
    var timer = setInterval(this.tickHandler , 100)
    this.setState({time : timer})
  }

  render() {
    const displaytime = ()=>{
      if (this.state.time < 60){
        return this.state.time + 'Seconds(s)'
      }
  
      const SS = this.state.time % 60 ;
      const MM = parseInt((this.state.time / 60) % 60)
      const HH = parseInt(this.state.time/(60*60))
      return `${HH}H: ${MM}m: ${SS}s` ;}
    return (
      <div>
          <p>{displaytime()} </p>
      </div>
    )
  }
}
