import React, { Component } from 'react'

export class Child extends Component {
  render() {
   
    var details=this.props.set

    return (
      <div>
        {details.map((value,index)=>{
         return <div>
          <h2>{value.name}</h2>
          <h3>{value.price}</h3>
          <h4>{value.isPurchased}</h4>
          <button onClick={()=>this.props.btn(value,index)}>Click Here</button>
         </div>
        })}
      </div>
    )
  }
}

export default Child