import React, { Component } from "react";

export class Child extends Component {
  constructor(props) {
    super(props);
    let b=this.props.dat;
    this.state={b}
  }
  render() {
    var bumb = this.state.b;
    console.log(bumb);

    const firstName=()=>{
      const firstName= [...bumb].sort((a, b) => a.price - b.price);
      this.setState({b:firstName});
    };
    const firstNamel=()=>{
       const firstNamel= [...bumb].sort((a, b) => a.price - b.price);
       this.setState({b:firstNamel.reverse()});
     };
     const trueFlase=()=>{
       const trueFlase= bumb.filter((val) => val.isPurchased==="false");
      this.setState({b:trueFlase});
     };

     const firstNameA=()=>{
       const firstNameA= [...bumb].sort((a, b) => {
         if (a.name > b.name){
           return -1;
         }
         if (a.name< b.name){
           return 1;
         }
           return 0;
       })
       this.setState({b:firstNameA});
     }
    

     const firstNameD=()=>{
       const firstNameD= [...bumb].sort((a, b) => {
         if (a.name > b.name){
           return -1;
         }
         if (a.name < b.name){
           return 1;
         }
         return 0;
       });

       this.setState({b:firstNameD.reverse()});

     }

    return (
      <div>
         <button onClick={()=>firstName()}>low to high</button>
         <button onClick={()=>firstNamel()}>high to low</button>
         <button onClick={()=>trueFlase()}>true or flase</button>
         <button onClick={()=>firstNameA()}>firstNameA</button>
         <button onClick={()=>firstNameD()}>firstNameD</button>
     
      <div>{bumb.map((value,index)=>{
        return <div key={index}>
        <h2>{value.name}</h2>
        <h3>{value.price}</h3>
        <h4>{value.isPurchased}</h4>
         
        </div>
      })}
      </div>
      </div>
    )
  }
}

export default Child


