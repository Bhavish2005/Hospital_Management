import React, { useContext, useState } from 'react'
import { Context } from '../main';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../Assests/logo.png'; 

function Login() {
  const{ isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[ confirmPassword,setConfirmPassword]=useState("");  
  const navigateTo = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, confirmPassword, role: "Admin" },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) return <Navigate to={"/"} />;
  
  return (
    <div className="container form-component ">
      {/* <h1>Sign In</h1>
      <p
        style={{
          marginTop: "10px",
        }}
      >
        Please Sign to Continue{" "}
      </p>
      <h4>AND</h4>
      <p>
        To Experience a Hassle Free Treatment by the Best Doctors in the World
      </p> */}
      <img src={logo}/>
      <h1 style={{textAlign:"center"}}>Welcome to LifeLine <br/>Hospital Management Portal</h1>
      <h2 style={{paddingTop:"10px"}}>Admin Login</h2>
      <p>Only Admins are Allowed to Access these Resources</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
