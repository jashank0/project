import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if(localStorage.getItem("user")){
      navigate("/")
      ;}
   console.log("dfd")
  }, [])
  
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const json = await response.json();
    const httpStatus = response.status; // This gives you the HTTP status code
    console.log(httpStatus);
    console.log(json);
    if (httpStatus <= 300) {
      localStorage.setItem("user", json.id);
      console.log(json);
      navigate("/");
    } else {
      alert(json.message);
    }
}catch(error){
  console.log("Error is ")
}
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;