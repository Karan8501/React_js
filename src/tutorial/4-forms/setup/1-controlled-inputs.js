import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName,setFirstName] =useState("");
  // const [firstName,setFirstName] =useState("hello world");
  const [email,setEmail] =useState("");

  const [gender, SetGender] = useState("");

  // list of pepole
  const [people, setPeople] = useState([]);
  // we want to add the submitted person into this use state

  const handleSubmit = (e)=>{
    e.preventDefault();// it will prvent the dafault page load on submition
    // console.log("hello world");
    console.log(firstName,email,gender);
    if(firstName && email){
      console.log("form submitted")
      const person = {
        id: new Date().getTime().toString(),
        firstName, //because firstName: firstName has the same name
        email,
        gender
      }

      setPeople((pepole)=>{
        return [...pepole,person]
      })
      setFirstName("");
      setEmail("");
      SetGender("male");

    }
    else{
      console.log('emoty values')
      alert("Either Name or the email is missing")
    }
  };

 

  return <>
  <article>
    <form className="form" onSubmit = {handleSubmit}>
      <div className='form-control' >
        <label htmlFor="firstName">Name :</label>
        <input 
          type='text' 
          id = "firstName" 
          name = "firstName" 
          value={firstName}
          onChange = {(e) =>  setFirstName(e.target.value)}
          placeholder ="Enter youre name"
        />
      </div>
      <div className='form-control' >
        <label htmlFor="email">Email :</label>
        <input 
        type='text' 
        id = "email" 
        name = "email" 
        value={email}
        onChange = {(e) => setEmail(e.target.value)}
        placeholder = "Enter youre email"
        />
      </div>
      <div className='form-control'>
           <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" value={gender} onChange={(e)=> SetGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> 
      </div>
      <button type='submit'>add person</button>
    </form>
    {
     people.map((person,index)=>{
        const {id,firstName,email,gender} = person; // we can use index also for the key
        return  <div key ={id} className='item'>
                  {(gender === "Female") ? (<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbiUyMGljb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='1' /> )
                  :( <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='2' />)
                  }
                  <h4>{firstName}</h4>
                  <p>{email}</p>
        </div>
      })
    }
  </article>
  </>;
};

export default ControlledInputs;
