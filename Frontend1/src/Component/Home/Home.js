import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  const handleChange=()=>{
    localStorage.removeItem("user");
  }
  return (
    <>
        <Link to="/login" >Login</Link>
        <Link to="/register">Register</Link>
        <button type='button'  onChange={handleChange}> Logout</button>

    </>
  )
}

export default Home