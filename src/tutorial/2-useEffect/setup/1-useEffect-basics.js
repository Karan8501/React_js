import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] =useState(0);
  useEffect(()=>{
    console.log("call use effect");
    if(value>=1){
      document.title = `New Messages(${value})`;
    }
  },[value])
  // if you want to initialize the render only once than use [] array as second  perameter
  // here value is the dependency for the useEffect the render will render if  vlaue changes

  // note we can use as many use Effect
  useEffect(()=>{
    console.log("2nd useEffect")
  })
  console.log( "render component")
  return <>
    <h1>{value}</h1>
    <button className="btn" onClick={()=>setValue(value + 1)}>increasee</button>
  </>;
};

export default UseEffectBasics;
