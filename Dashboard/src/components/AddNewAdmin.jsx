import React, { useContext, useState } from 'react'
import { Context } from '../main';
import axios from 'axios';
import { toast } from 'react-toastify';
import {  Navigate, useNavigate } from 'react-router-dom';
import Logo from '../Assests/Logo.png';  

function AddNewAdmin() {
  const { isAuthenticated, } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/admin/register",
        { firstName, lastName, email, phone, nic, dob, gender, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.message);
      // setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className='page'>
      <div className="container form-component add-admin-form">
      <img src={Logo} alt="logo"  />
      <h1 className='form-title'>Add New Admin</h1>
      <p></p>
      <form   onSubmit={handleAddNewAdmin}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
          <input
            type="date"
            placeholder="DOB"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            gap: "10px",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          {/* <p style={{ marginTop: "10px", marginBottom: "10px" }}>
            Already have an Account?
          </p> */}
          {/* <Link
            to={"/login"}
            style={{
              textDecoration: "none",
              color: "grey",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            Login Now
          </Link>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        > */}
          <button type="submit">Add New Admin</button>
        </div>
      </form>
    </div>
    </section>
  )
}

export default AddNewAdmin