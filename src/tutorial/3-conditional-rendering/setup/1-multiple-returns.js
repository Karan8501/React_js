import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [isError,setIsError] = useState(false);

  const [user,setUser] = useState("default user");


  // // return multiple values on the basis of condition
  // if(loading){
  //   return <h2>loading...</h2>
  // }
  // return <h2>multiple returns</h2>;

  // fetch request

  useEffect(()=>{
    fetch(url)
      .then((resp)=>{
        if(resp.status >=200 && resp.status <=299 ){
          // console.log(resp.json())
          return resp.json();
          
        }
        else{
          setIsLoading(false);
          setIsError(true);
          console.log(isError)
          throw new Error(resp.statusText);
        }
      })
      .then((user)=> {
        const {login} = user;
        setUser(login);
        setIsLoading(false);
      })
      .c
      atch((error)=>console.log(error))
  },[]);

  if(isLoading){
    return (
      <div>
        <h1>loading..</h1>
      </div>
    )
  }

  if(isError){
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
};

export default MultipleReturns;
