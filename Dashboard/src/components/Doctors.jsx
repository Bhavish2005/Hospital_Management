import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main';
import axios from 'axios';
import { toast } from 'react-toastify';

function Doctors() {
  const [doctors,setDoctors]=useState([]);
  const{isAuthenticated}=useContext(Context);
  useEffect(()=>{
    const fetchDoctors=async()=>{
try {
  const {data}=axios.get("http://localhost:4000/api/v1/user/doctors",{withCredentials:true})
  setDoctors(data.doctors);
} catch (error) {
  toast.success(error.response.data.message);
}
fetchDoctors();
    }
  },[])
  if(!isAuthenticated)
    return <Navigator to={"/login"}/>
  return (
    <section className="page doctors">

    </section>
  )
}

export default Doctors