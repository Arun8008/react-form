import React, { Component } from 'react'

export class Parent extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    changeNum=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
         <h2>{this.state.count}</h2>
         <button onClick={()=>this.changeNum()}>Click Here0</button>
      </div>
    )
  }
}

export default Parent