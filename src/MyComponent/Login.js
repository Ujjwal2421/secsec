import {  useNavigate } from 'react-router-dom';
import './App2.css';

import React,{useState} from 'react'
import { data } from './Authenticate';
const Login = () => {
   const[user,setUser]=useState("");
   const[password,setPassword]=useState("");
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        const userFound = data.find((d) => d.username === user && d.password === password);
        if (userFound) {
            navigate("/addsec")
          } else {
            e.preventDefault()
            alert('Invalid username or password');
          }
    }
  return (
    
    <>
    
        <div className="container">
                      <h1 className="h1-heading">IVP Sec Master</h1>
                  </div>
            <div className="wrapper">
                          <form onSubmit={handleSubmit}>

                              <h1>Login</h1>
                              <div className="input-box">
                                  <input type="text" placeholder="Username"  value={user}  onChange={(e) => setUser(e.target.value)} required  />
                              </div>
                              <div className="input-box">
                                  <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>
                              </div>
                              <button type="submit" className="btn" >Login</button>
                          </form>
                      </div>
                      
    </>
 
  )
}

export default Login
