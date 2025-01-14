import React, { useContext, useEffect, useState } from 'react'
import {Context} from '../main.jsx'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import  photo from '../Assests/Doctor.png';
import {GoCheckCircleFill} from "react-icons/go";
import {AiFillCloseCircle} from "react-icons/ai";
function Dashboard() {
  const {isAuthenticated,user}=useContext(Context)
  const [appointments,setAppointments]=useState([]);
   const [doctors,setDoctors]=useState([]);
  useEffect(()=>{
    const fetchAppointments=async()=>{
      try {
        const {data}=await axios.get("http://localhost:4000/api/v1/appointment/getAppointment",{withCredentials:true});
      setAppointments(data.appointments);
      console.log(data.appointments)
      } catch (error) {
        setAppointments([]);
        console.log("Some Error Occured during Fetching",error)
      }
      

    };
    const fetchDoctors=async()=>{
      try {
        const {data}= await axios.get("http://localhost:4000/api/v1/user/doctors",{withCredentials:true})
        setDoctors(data.doctors);
        // console.log(data.data.doctors);
      } catch (error) {
        toast.success(error.response.data.message);
      }
    }
    fetchDoctors();
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
  <div className='secondBox'>
    <p>Total Appointments Scheduled </p>
    <h3>{appointments && appointments.length>0?
      appointments.length : "0"}</h3>
  </div>
  <div className='thirdBox'>
    <p>Registered Doctors</p>
    <h3>{appointments && appointments.length>0?
      appointments.length : "0"}</h3>
  </div>
      </div>
      <div className='banner'>
        <h2>Appointments</h2>
        <table>
        <thead>
        <tr>
           <th>Patient</th>
           <th>Date</th>
           <th>Doctor</th>
           <th>Department</th>
           <th>Status</th>
           <th>Visited</th>
        </tr>
        </thead>
        <tbody>
          {
            appointments&&appointments.length>0?(appointments.map(element=>{
              return (
                <tr key={element.id}>
                  <td>{`${element.firstName} ${element.lastName}`}</td>
                  <td>{element.appointment_date.substr(0,16)}</td>
                  <td>{`${element.doctor.firstName} ${element.doctor.lastName}`}</td>
                  <td>{element.department}</td>
                  <td>
                    <select className={element.status==="Pending" ?" value-pending" : element.status==="Rejected"?"value-rejected":"value-accepted"} value={element.status} onChange={(e)=>e.target.value}>
                      <option value="Pending" className='value-pending'>Pending</option>
                      <option value="Rejected" className='value-rejected'>Rejected</option>
                      <option value="Accepted" className='value-accepted'>Accepted</option>
                    </select>
                  </td>
                  <td>{element.hasVisted==true ? <GoCheckCircleFill className="green"/>:<AiFillCloseCircle  className="red"/>}</td>
                </tr>
              )

            })):(<h1>There are No Appointments Applied By Patients</h1>)
           
          }
        </tbody>
         
        </table>
      </div>
    </section>
  </>
}

export default Dashboard 