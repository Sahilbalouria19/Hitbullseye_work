import React, {useState} from 'react';
import './App.js';

export default function Form(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleName(e){
    console.log(name, "<---name");
    setName(e.target.value);
  }
  function handleEmail(e){
    console.log(email, "<---email");
    setEmail(e.target.value);
  }
  function handlePassword(e){
    console.log(password, "<---password");
    setEmail(e.target.value);
  }
  
return (
    <div>
      <form>Name : </form>
      <input type = "text" onChange = {handleName}></input>
      <br/>
      <label>Email: </label>
      <input type = "email"></input> 
      <br/>
      <label>Password</label> 
      <input type="password"></input>
      <br/>
      <button>Submit</button>
    </div>
  )
}
