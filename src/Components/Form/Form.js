import React, { useState } from 'react'
import './form.css'

const Form = () => {
    const [inpName,setName]=useState('')
    const [inpDes,setDes]=useState('')
    const [isCompleted,setIsCompleted]=useState('')
    const [formSub,setFormsub]=useState(false)
    const [isAnswer,setAnswer]=useState([]);
  

    const inputName=(e)=>{
         console.log("e",e.target.value)
         setName(e.target.value)
    }
    const inputDes=(e)=>{
        console.log("e",e.target.value)
        setDes(e.target.value)
   }
const checked=(e)=>{
    // if(e.target.isCompleted){
    //     setIsCompleted(true)
    // }
    // else{
    //     setIsCompleted(false)
    // }
    setIsCompleted(e.target.checked?"true":"false")
}
//    const inputDetail=(e)=>{
//     console.log("e",e.target.value,e.target.name)   
//       setIsCompleted(e.target.checked?"true":"false")
//    }
    const sub=(e)=>{
        e.preventDefault();
        setFormsub('true')
          console.log(inpName,inpDes)
        setAnswer([...isAnswer,{Name:inpName, Description:inpDes, Answer:isCompleted}])
    }
  return (
    <div>
        <form onSubmit={sub} className='width'>
            <input name='name' value={inpName} onChange={inputName} placeholder='Enter Name' />
            {inpName==="" && formSub && <div>The Name Is Required</div>}
            <input name='des' value={inpDes} onChange={inputDes} placeholder='Enter Description' />     
            {inpDes==="" && formSub &&<div>The Des Is Required</div>}      
            <input type='checkbox' value={isCompleted} onChange={checked}  id='checkbox'/>
            <input type={"submit"}></input>
        </form>
        <div>
            {isAnswer.map((value,index)=>{
              return  <div key={index}>
                <h2>Name:{value.Name}</h2>
                <h3>Description:{value.Description}</h3>
                <h4>Checked{value.Answer}</h4>
                </div>
            })
            }
        </div>
    </div>
  )
}

export default Form