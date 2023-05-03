import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements


const UseRefBasics = () => {
const refContainer = useRef(null); // it is an object with current property
const divContainer = useRef(null);

  const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(refContainer.current.value);
  console.log(divContainer.current);
}

useEffect (()=>{
  console.log(refContainer.current);
  refContainer.current.focus();// give the input element
})

console.log(refContainer);
  return <>
    <form action="#" className='form' onSubmit={handleSubmit}>
      <input type="text" ref = {refContainer}></input>
      <button className='btn'>submit</button>

    </form>
    <div  ref ={divContainer}>
      hello world
    </div>
  </>;
};

export default UseRefBasics;
