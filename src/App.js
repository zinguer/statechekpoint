import React, { Component } from 'react'
import Counter from './componets/Counter'
import Profile from './componets/Profile'

export default class App extends Component {
  state ={
    show : false
  }
  render() {
    return (
      <div>
        <button onClick ={()=>this.setState({show : !this.state.show})} >show</button>
        {
          this.state.show && <Profile/>
        }
        
      </div>
    )
  }
}
