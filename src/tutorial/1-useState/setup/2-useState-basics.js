import React, { useState } from 'react';
// useState is a function
// always start with "use"
//compnent name  must be in uppercase
// must be in a function // component body
// can not called condiitnally

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handeler = useState(1)[1];
  // console.log(value,handeler);

  const [text,setText] = useState("random title");

  const handleCheck =()=>{
    if(text === "random title"){
      setText("hello world");
    }
    else{
      setText("random title");
    }
    
  }
  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleCheck}>Change title</button>
    </>
  )
};

export default UseStateBasics;
