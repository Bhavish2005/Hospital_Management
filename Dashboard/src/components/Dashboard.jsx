import React, { useContext, useEffect, useState } from 'react'
import {Context} from '../main.jsx'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import  photo from '../Assests/Doctor.png'
function Dashboard() {
  const {isAuthenticated,user}=useContext(Context)
  const [appointments,setAppointments]=useState([]);
  useEffect(()=>{
    const fetchAppointments=async()=>{
      try {
        const {data}=await axios.get("http://localhost:4000/api/v1/appointment/getAppointment",{withCredentials:true});
      setAppointments(data.appointment );
      } catch (error) {
        setAppointments({});
        console.log("Some Error Occured during Fetching",error)
      }
      

    };
    fetchAppointments();

  },[]);

  if(!isAuthenticated){
    return <Navigate to="/login"/>
  }
  return <>
    <section className='dashboard page'>
      <div className='banner'>
        <div className='firstBox'>
<img src={ photo} alt='docImage'/>
  <div className='content'>
    <div>
      <p>Hello ,</p>
      <h5>{user &&`${user.firstName} ${user.lastName}`}</h5>
    </div>
    <p>
       ejkhbfh43br4gwjkbgbfrkentkfhknbgjkthjkgt
    </p>
  </div>
        </div>
      </div>
    </section>
  </>
}

export default Dashboard