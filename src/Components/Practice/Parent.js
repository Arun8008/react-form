import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  render() {
    const mobiles = [{
        id:"001",
        name :"oneplus11",
        price : 56999,
        isPurchased: "true",
      },
        {
        id:"002",
        name : "Vivi Y100",
        price : 24999,
        isPurchased: "false",
      },
        {
        id:"004",
        name : "iphone 13",
        price : 62990,
        isPurchased : "false",
      },
        {
        id:"005",
        name : "Nokia",
        price : 12000,
        isPurchased: "true",
      },
       ]
       
       var dare=(a,b)=>{
        let are=mobiles.filter((value,index)=>{
          return value.price<a.price
        })
    
      
       let sec=document.getElementById("section")
        are.map((value,index)=>{
         let head=document.createElement("h1")
         sec.appendChild(head)
         head.innerHTML=value.name;
       })


       }

      
    return (
      <div>
        <Child set={mobiles} btn={dare}/>
       <div id="section">

       </div>
      </div>
    )
  }
}

export default Parent