import React,{useState} from 'react'
import {Dare} from './Dare'

export const Fare = () => {
    let employees = [
        { id: 11, name:"Abhinav", salary:75000 }, 
        { id: 2131, name:"Gaurav", salary:62000 },
        { id: 3012, name:"Raj", salary:32000 }
       ]
    
   const [arun,setArun]=useState([])
   
       var arr=(a,b)=>{
   
      let te=employees.filter((value,index)=>{
         return value.salary<a.salary
      })
      console.log(te)
      setArun(te)
       }
      //  var fun=(a,b)=>{
      //   let temp=employees.filter((value,index)=>{
      //     let der=employees.id1+employees.id2
      //     return der.employees.name="Arun"
      //   })
      //   console.log(temp)
      //  }
     
       return (
        <div>
          <Dare  arun={employees} btn={arr}/>
          {arun.map((value,index)=>{
              return <div key={index}>
              <h2>{value.id}</h2>
              <h3>{value.name}</h3>
              <p>{value.salary}</p>
              </div>
          })
        }
        </div>
      )
    }
    