import React,{ useState }  from 'react'

const Calculator = () => {
  const [answer, setAnswer] = useState(0);

  const num1=2;
  const num2=4;


   const clickHandler0=()=>{
    setAnswer(num1+num2);


   }
   
   const clickHandler1=()=>{
    setAnswer(num1-num2);


   }

   
   const clickHandler2=()=>{
    setAnswer(num1*num2);


   }

   
   const clickHandler3=()=>{
    setAnswer(num1/num2);


   }
    const clear=()=>{
      setAnswer(0);
    }


  return (
    <>
    <div>
      <h1>Simple Calculator</h1>  
    </div>
    <p>{answer}</p>
 
    <button>{`First number is ${num1}`},{`Second number is ${num2}`}</button>
    <br></br>
    <br></br>
    <button onClick={clickHandler0}>Add</button>
    <button onClick={clickHandler1}>sub</button>
    <button onClick={clickHandler2}>Mul</button>
    <button onClick={clickHandler3}>Div</button>
    <button onClick={clear}>Reset</button>
  

    </>
  )
}

export default Calculator