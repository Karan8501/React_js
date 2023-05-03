import React, { useState } from 'react';
import {data} from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setpeople] = useState(data);
  const removePesron = (id) =>{
    setpeople((people)=>{
      return people.filter((person) => person.id !== id);
    })

  }
  return <section>
  <h3>prop drilling</h3>
  <List people ={people} removePesron = {removePesron}/>
  </section>;
};

const List = ({people,removePesron} )=>{
  return <>
    {people && people.map((person)=>{
      return <SinglePerson key= {person.id} {...person}
      removePesron ={removePesron}/>
    })}
  </>
}

const SinglePerson = ({id,name,removePesron})=>{
  return <div className='item'>
    <h4>{name}</h4>
    <button onClick={()=>removePesron(id)}>remove</button>
  </div>
}

export default PropDrilling;
