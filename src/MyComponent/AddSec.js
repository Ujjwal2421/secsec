import React, { useState } from 'react'
import './App2.css';
import { useNavigate } from 'react-router-dom';
import AddEquity from './AddEquity';

const AddSec = () => {
  const[button,setId]=useState('')
  const[fetch,setFetch]=useState('')
  const navigate=useNavigate()
  const createFrame=()=>{
    
   document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function(event) {
            setId(event.target.id)
      });
  });
    // console.log(button)
      if(button==='equityA'){  
            navigate("/equity")
      }else if(button==='bondA'){
        navigate("/bond")
    }
    }
  const getData=()=>{
      document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(event) {
              setFetch(event.target.id)
        });
    });
    // console.log(fetch)
        if(fetch==='equityF'){  
              navigate("/fetche")
        }else if(fetch==='bondF'){
          navigate("/fetchb")
      }
    }
    const fetchButton=()=>{
      document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(event) {
              setFetch(event.target.id)
        });
    });
    // console.log(fetch)
        if(fetch==='equityE'){  
              navigate("/edite")
        }else if(fetch==='bondE'){
          navigate("/editb")
      }
    }
  return (
    <div className="container">
        {/* <h1 className="h1-headings">Welcome to Sec Master</h1> */}
        <h2>Which security to Add?</h2>
        <button type="button" className="btn btn-primary" onClick={createFrame} id="equityA">Equity</button>
        <br/><br/>
        <button type="button" className="btn btn-primary" onClick={createFrame} id="bondA">Bond</button><br/><br/>
        <h2> Which security to Edit?</h2>
        <button type="button" className="btn btn-primary" onClick={fetchButton} id="equityE">Equity</button>
        <br/><br/>
        <button type="button" className="btn btn-primary" onClick={fetchButton} id="bondE">Bond</button><br/><br/>
        <h2> Which security data you want to Read?</h2>
        <button type="button" className="btn btn-primary" onClick={getData} id="equityF" >Equity</button>
        <br/><br/>
        <button type="button" className="btn btn-primary" onClick={getData} id="bondF">Bond</button><br/><br/>
    </div>
  )
}

export default AddSec
