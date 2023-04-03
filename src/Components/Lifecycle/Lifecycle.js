import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor(){
        super()
        console.log("constructor")
        this.state={
            name:"Arun",
            number:1,
        }
    }

    componentDidMount(){
        console.log("componentDidMount")
        // setInterval(()=>{
        //     this.setState({number:this.state.number+1})
        // },2000)
    }
    componentDidUpdate(){
        console.log("componentdidupdate")
    }
  render() {
    console.log("render")
    return (
      <div>Arun{this.state.number}</div>
    )
  }
}

export default Lifecycle