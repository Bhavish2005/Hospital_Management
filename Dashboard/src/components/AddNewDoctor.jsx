import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Assests/Logo.png'; 
import photo from '../Assests/Avatar.jpg'

function AddNewDoctor() {
  
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nic, setNic] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const[doctorDepartment,setDoctorDepartment]=useState("");
    const[docAvatar,setDocAvatar]=useState("");
    const[docAvatarPreview,setDocAvatarPreview]=useState("");
    const departmentsArray = [
      "Radiology",
      "Hepathology",
      "Gynecology",
      "Orthology",
      "Cardiology",
      "Neurology",
      "Nephrology",
    ];
    const navigateTo = useNavigate();
    const handleAvatar=(e)=>{
      const file=e.target.files[0];
      
      const reader=new FileReader();// Create a new FileReader instance
      reader.readAsDataURL(file);// Read the file as a data URL
      reader.onload=()=>{// When the file has been read successfully
        setDocAvatarPreview(reader.result);
        setDocAvatar(file);
      }
    }
    const handleAddNewDoctor = async (e) => {
      e.preventDefault();
      try {
        const form=new FormData();
        form.append("firstName",firstName);
        form.append("lastName",lastName);
        form.append("email",email);
        form.append("phone",phone);
        form.append("nic",nic);
        form.append("password",password);
        form.append("doctorDepartment",doctorDepartment);
        form.append("docAvatar",docAvatar);
        form.append("dob",dob);
        const response = await axios.post(
         " http://localhost:4000/api/v1/user/doctor/addnew",
          form,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",// this is one different for Formdata..
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
        <div className="container form-component add-doctor-form">
        <img src={Logo} alt="logo"  />
        <h1 className='form-title'>Add a New Doctor</h1>
        <p></p>
        <form   onSubmit={handleAddNewDoctor}>
        <div className='first-wrapper'>
          <div >
            <img src={docAvatarPreview ? docAvatarPreview:photo } alt='Avatar' />
            <input type="file" onChange={handleAvatar}/>
          </div>
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
            <select value={doctorDepartment} onChange={(e)=>setDoctorDepartment(e.target.value)}>
              <option value=" ">Select Department</option>{
                departmentsArray.map((element,index)=>{
                  return(
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
              })}
                
            </select>
            <button  type="submit">Add New Doctor</button>
          </div>
        </div>
         
    
          {/* <div
            style={{
              gap: "10px",
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          > */}
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
            
          {/* </div> */}
        </form>
      </div>
      </section>
    )
  }


export default AddNewDoctor