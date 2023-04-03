import React, { Component } from 'react'

export class Child extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.timer();
    }
     timer(){
    setInterval(() => {
        this.setState({count:this.state.count+1})
    }, 1000);
}
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

export default Child