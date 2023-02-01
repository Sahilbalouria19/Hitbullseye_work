import React from 'react'

export default function app() {
  return (
    <div>
      <form>Name : </form>
      <input type = "text"></input>
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
