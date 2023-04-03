import { useState } from "react";


const Parent = () =>{

  let product=[
    {
        name:"moblie",
        price:10000,
        quality:true
    },
    {
        name:"bag",
        price:600,
        quality:false
    },
    {
        name:"book",
        price:100,
        quality:true
    },
    {
        name:"sliper",
        price:300,
        quality:false
    },
    {
        name:"apple",
        price:200,
        quality:false
    },
    {
        name:"chocolate",
        price:150,
        quality:true
    },
];
  
  const [state,setState]=useState(product)


    let btn1 = [...product].sort((a,b)=>{
      return a.price-b.price;
    })
    let btn2=[...btn1].reverse();
  
    const sortuh=(alp)=>{
      var sid=[...product].sort((a,b) => {
          var said=a.name.toUpperCase()
          var saad=b.name.toUpperCase()
          if(said<saad){
            return -1
          }
          if(said>saad){
            return 1
          }
          return 0;
          
   })
   {alp==='truee' ? setState(sid):setState(sid.reverse())}
     }
   
  return(
    <div>
      <button onClick={()=>sortuh("truee")}>Name apha order</button>
      <button onClick={()=>sortuh("aa")}>Name apha reverse</button>
      <button onClick={()=>setState(btn1)}>price low to high</button>
      <button onClick={()=>setState(btn2)}>price high to low</button>
      <button onClick={()=>setState([...product])}>All</button>
      {state.map((value,index)=>{
          return(
            <div key={index}>
              <h1>{value.name}</h1>
              <p>{value.price}</p>
              <h3>{value.quality}</h3>
            </div>
          )
        })
      }
    </div>
  )
}
export default Parent