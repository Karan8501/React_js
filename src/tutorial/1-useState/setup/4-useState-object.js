import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:"karan",
    age:24,
    message: "random message"
  })

  console.log(person);

  const changeMessage = ()=>{
    setPerson({...person,message:"hello world"});
    // it will copy all the value from prev object and it will b e changed
  }
  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>change message</button>
  </>;
};

export default UseStateObject;
