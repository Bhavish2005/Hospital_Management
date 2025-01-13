import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom';


function Doctors() {
  const [doctors,setDoctors]=useState([]);
  const{isAuthenticated}=useContext(Context);
  useEffect(()=>{
    const fetchDoctors=async()=>{
try {
  const {data}= await axios.get("http://localhost:4000/api/v1/user/doctors",{withCredentials:true})
  setDoctors(data.doctors);
  // console.log(data.data.doctors);
} catch (error) {
  toast.success(error.response.data.message);
}

    };
    fetchDoctors();
  },[]);
  if(!isAuthenticated){
    return <Navigate to={"/login"}/>
  }
  return <> 
  <section className="page doctors">
  <h1>Doctors</h1>
     <div className='banner'>
      {
        doctors && doctors.length>0 ? (doctors.map(element=>{
          return (
            <div className='card'>
              <img src={element.docAvatar && element.docAvatar.url} alt='Doctor Avatar'/>
              <h4> {`${element.firstName} ${element.lastName}`}</h4>
              <div className='details'>
                <p> Email: <span>{element.email}</span></p>
                <p> Phone: <span>{element.phone}</span></p>
                <p> DOB: <span>{element.dob.substr(0,10)}</span></p>
                <p> Department: <span>{element.doctorDepartment}</span></p>
                <p> NIC: <span>{element.nic}</span></p>
                <p> Gender: <span>{element.gender}</span></p>
              </div>
            </div>
          )
        })): (<h1 style={{textAlign:"center"}}>NO Doctors Are Register <br/> If you want to Add the Doctors To Hospital <br/> Click On<Link style={{textDecoration:"none"}} to={'/doctor/addnew'}> Add Doctor</Link></h1>)
      }
     </div>

    </section></>
   
  
}


export default Doctors