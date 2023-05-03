import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);


  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
    {/* <h1>{firstValue}</h1>
    <h1>value :{secondValue}</h1> */}
    {/* {if(){console.log("helloworld")}} */}

    <h1>{text  || "karan"}</h1>
    <button className='btn' onClick={() => setIsError(!isError)}>toggle Error</button>

    {/* {!text && <h1>hello wprld</h1> }  */}

    {isError && <h1>Erorr...</h1>}

    {isError ? (<h2>there is an error..</h2>) 
     : (<div>
       <h2>there is no error</h2>
      </div>)}



  </>;
};

export default ShortCircuit;
