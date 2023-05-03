import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [people, setPeople] = useState([]);

  // using single onchage event for the mutiple input
  const [person,setPerson] =useState({firstName:"",email:"",age:""});

  const handleChange =(e)=>{
    const name = e.target.name;// name of the input
    const value = e.target.value;// vlaue in that input;
    setPerson({...person,[name]:value});
    console.log(name,value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(person.firstName && person.email && person.age){
      const newPesron = {...person, id:new Date().getTime().toString()};

      // add the person into people
      setPeople([...people,newPesron]);

      // set person to empty string
      setPerson({firstName:"",email:"",age:""});

    }
  }

  

  
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email,age} = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
