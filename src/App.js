import React, { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, SetResult] = useState(0); // Initial state for input value

  const plus = (event) => {
    event.preventDefault();
    SetResult( result => result +Number(inputRef.current.value) )
    
  };
  
  const minus = (event) =>{
    event.preventDefault();
    SetResult( result => result - Number(inputRef.current.value) )
    
    
  }
  const times = (event) =>{
    event.preventDefault();
    SetResult( result => result * Number(inputRef.current.value) )
    
    
  }
  const divide = (event) =>{
    event.preventDefault();
    SetResult( result => result / Number(inputRef.current.value) )
    
  }
  const resetInput = (event) =>{
    event.preventDefault();
    inputRef.current.value = 0;
  }
  const resetResult = (event) =>{
    event.preventDefault();
    SetResult(result => result * 0)
    
  }

  return (
    <div>
      <h1> Simplest Working Calculator</h1>
      <div>
        <label ref={resultRef}> {result} </label>
      </div>
      <input ref={inputRef} placeholder='type a number' />
      <div>
        <button  onClick={plus}> Add </button>
        <button  onClick={minus}> Subtract </button>
        <button  onClick={times}> Multiply </button>
        <button  onClick={divide}> Divide </button>
        <button  onClick={resetInput}> reset input </button>
        <button  onClick={resetResult}> reset result </button>
      </div>
      {/* <h1>{console.log(inputRef)}</h1> */}
    </div>
  );
}

export default App;
