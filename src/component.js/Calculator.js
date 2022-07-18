import React, { useState,useEffect } from 'react'

const Calculator = () => {
  const [answer, setAnswer] = useState([]);
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();




  const Submit = (event) => {
    event.preventDefault();
    

    const setAnswer = {
      
        num1: num1,
        num2: num2
    };
    setAnswer([answer]);

}

const change = (event) => {
  setNum1(event.target.value);

}
const change1 = (event) => {
  setNum2(event.target.value);

}


  const clickHandler0 = () => {
    setAnswer(Number(num1) + Number(num2));


  }

  const clickHandler1 = () => {
    setAnswer(num1 - num2);


  }


  const clickHandler2 = () => {
    setAnswer(num1 * num2);


  }


  const clickHandler3 = () => {
    setAnswer(num1 / num2);


  }
  const clear = () => {
    setAnswer("");
    setNum1("");
    setNum2("");

  }

 


  return (
    <>
      <div>
        <h1>Simple Calculator</h1>
      </div>



      <form onClick={Submit}>





        <label>
          Num1 <input type="number" name="name" value={num1} onChange={change} />
        </label>
        <br></br>

        <label>
          Num2 <input type="number" name="name" value={num2} onChange={change1} />
        </label>
        <br></br>

        <div>
          <button onClick={clickHandler0}>Add</button>
          <button onClick={clickHandler1}>sub</button>
          <button onClick={clickHandler2}>Mul</button>
          <button onClick={clickHandler3}>Div</button>
          <button onClick={clear}>Reset</button>
          <br></br>
         
          <button >{`Answer  ${answer}` }</button>

          

        </div>

      </form>


    </>
  )
}

export default Calculator