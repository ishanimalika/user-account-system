import React, { useState } from 'react'
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AddUser.css"; // import external CSS

function AddUser() {
  const history = useNavigate();
  const [inputs,setInputs] = useState({
    name:"",
    gmail:"",
    age:"",
    address:"",
  });

  const handleChange =(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('/userdetails'))
  }

  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/users",{
      name: String(inputs.name),
      gmail: String(inputs.gmail),
      age: Number(inputs.age),
      address: String(inputs.address),
    }).then(res => res.data);
  }

  return (
    <div>
      <Nav/>
      <div className="adduser-container">
        <h1 className="form-title">Add User</h1>
        <form onSubmit={handleSubmit} className="adduser-form">
          
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} value={inputs.name} required />

          <label>Email</label>
          <input type="email" name="gmail" onChange={handleChange} value={inputs.gmail} required />

          <label>Age</label>
          <input type="number" name="age" onChange={handleChange} value={inputs.age} required />

          <label>Address</label>
          <input type="text" name="address" onChange={handleChange} value={inputs.address} required />

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser
