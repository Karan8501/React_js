import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { act } from 'react-dom/test-utils';
// reducer function

const reducer = (state,action) =>{
  // always return some state 
     console.log(state,action);
     if(action.type === "ADD_ITEM"){
      const newPeople =[...state.people, action.payload]
      const name =action.payload.name;
      return {...state,
        people:newPeople,
        isModalOpen:true,
        modalContent:`${name} is added to list`
      }
     }
     if(action.type === "NO_VALUE"){
      return {
        ...state,
        isModalOpen:true,
        modalContent:"enter the value first"
      }
     }
    if(action.type === "CLOSE_MODAL"){
      return {
        ...state,
        isModalOpen:false,
      }
     }

    if(action.type === "REMOVE"){
      const newPeople = state.people.filter(
      (person) => person.id !== action.payload
         );
         return {
          ...state,
          people: newPeople,
          isModalOpen:true,
          modalContent:"Item removed successfully"
         }
        
    }


     throw new Error("no matching cation type");
}
const Index = () => {
// **************************************not the part of useReducer*************
  // const [people , setPeople] = useState(data);
  // const [showModal,setShowModal] = useState(false);

  // const [name, setName] = useState("")


  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   if(name){
  //     setShowModal(true);
  //     setPeople([...people,{id:new Date().getTime().toString(), name}]);
  //     setName("");
  //   }else{
  //     setShowModal(true);
  //   }
  // }
   
  // *********************************************************************

   const [name , setName] = useState("");

   const defaultState ={
    // people:data,
    // isModalOpen:true,
    // modalContent:"hello world"
     people:[],
    isModalOpen:false,
    modalContent:""
   }

   const [state, dispatch] = useReducer(reducer,defaultState);// ftakes fuction and intial state


  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name){
      // if there is name in the input after dispatch 
      const newItem = {id:new Date().getTime().toString(), name};
      dispatch({type:"ADD_ITEM",payload:newItem});
    }else{
      dispatch({type:"NO_VALUE"});
    }
  }

  // close modal function
  const closeModal = () => {
    dispatch({type:"CLOSE_MODAL"});
  }


  return <>
  {/* ****************************** */}
    {/* {showModal && <Modal/>}
    <form action="" onSubmit={handleSubmit} className="form">

      <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      </div>
      <button className='btn'>submit</button>
    </form>
    {people.map((person) =>{
      return <div key = {person.id}>
        <h4>{person.name}</h4>

      </div>
    })} */}
    {/* **************************************** */}

    {state.isModalOpen && <Modal closeModal ={closeModal} modalContent={state.modalContent}/>}
    <form action="" onSubmit={handleSubmit} className="form">

      <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      </div>
      <button className='btn'>submit</button>
    </form>
    {state.people.map((person) =>{
      return <div key = {person.id} className="item">
        <h4>{person.name}</h4>
        <button  onClick={()=> dispatch({type:"REMOVE",payload:person.id}) }>remove</button>
      </div>
    })}
  </>;
};

export default Index;
