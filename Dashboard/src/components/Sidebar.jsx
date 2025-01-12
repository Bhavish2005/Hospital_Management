import React, { useContext, useState } from 'react'
import { Context } from '../main';
import {TiHome} from 'react-icons/ti';
import {RiLogoutBoxLine} from 'react-icons/ri';
import{AiFillMessage} from 'react-icons/ai';
import{GiHamburgerMenu} from 'react-icons/gi';
import { FaStethoscope } from 'react-icons/fa';
import{MdAddModerator} from 'react-icons/md';
import{IoPersonAddSharp} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Sidebar() {
  const [show,setShow]=useState(false);
  const {isAuthenticated,setIsAuthenticated}=useContext(Context);
  const navigate=useNavigate(); 
  const gotoHome=()=>{
    navigate('/');  
    setShow(!show);
   };
   const gotoDoctorPage=()=>{
    navigate('/doctors');  
    setShow(!show);
   };
   const gotoMessages=()=>{
    navigate('/messages');  
    setShow(!show);
   };
   const gotoAddNewDoctor=()=>{
    navigate('/doctor/addnew');  
    setShow(!show);
   };
   const gotoAddNewAdmin=()=>{
    navigate('/admin/addnew');  
    setShow(!show);
   };
   const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <>
    <nav style={!isAuthenticated?{display:'none'}:{display:'block'}} className={show?"show sidebar":"sidebar"}>
  <div className='links'>
    <TiHome onClick={gotoHome}/>
    <FaStethoscope onClick={gotoDoctorPage}/>
    <MdAddModerator onClick={gotoAddNewAdmin}/>
    <IoPersonAddSharp onClick={gotoAddNewDoctor}/>
    <AiFillMessage onClick={gotoMessages}/> 
    <RiLogoutBoxLine onClick={handleLogout}/>
  </div>
    </nav>
    <div  style={!isAuthenticated ? {display:"none"}:{display:"flex"}}className='wrapper'>
      <GiHamburgerMenu className='hamburger' onClick={()=>setShow(!show)}/>
    </div>
    </>
    
  )
}

export default Sidebar