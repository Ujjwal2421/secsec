import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const FetchEquity = () => {
  const navigate=useNavigate()
    const[data,setData]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    const handleClick=()=>{
      navigate("/viewsec")
    }
  return (
    <div>
        <h3>Want to fetch all the data related to equity.</h3>
      <button type="button" className="btn btn-success" onClick={handleClick}>Click Here</button><br/><br/>
      <h3>Want to fetch specific equity data.</h3>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Name of Equity" aria-label="Search" value={data} onChange={(e)=>setData(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  )
}

export default FetchEquity