import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const FetchBond = () => {
  const navigate=useNavigate();
    const[data,setData]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    const handleNav=()=>{
        window.location.href='/viewb'
    }
    const handleSpecific=()=>{
      navigate('/specificb',{state:{data:data}})
    }
  return (
    <div>
        <h3>Want to fetch all the data related to bond.</h3>
      <button type="button" className="btn btn-success" onClick={handleNav}>Click Here</button><br/><br/>
      {/* <h3>Want to fetch specific bond data.</h3> */}
      {/* <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Name of Bond" aria-label="Search" value={data} onChange={(e)=>setData(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" onClick={handleSpecific}>Search</button>
      </form> */}
    </div>
  )
}

export default FetchBond
