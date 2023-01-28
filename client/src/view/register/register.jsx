import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axois from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:""
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    setErr(null)
  }

  const handleClick = async(e) => {
    e.preventDefault();
    try{
      await axois.post("http://localhost:8800/api/auth/register", inputs)
    }catch(err){
      setErr(err.response.data)
    }
  }
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" name="username" onChange={handleChange} placeholder="Username" />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" onChange={handleChange} placeholder="password" />
            <input type="text" name="name" onChange={handleChange} placeholder="Name" />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
