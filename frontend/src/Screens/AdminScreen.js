
import React,{useEffect} from 'react'
import Search from '../components/Search'
import '../css/adminScreen.css';
import {useNavigate} from "react-router-dom";
import PatientInfoNav from '../components/PatientInfo.Nav.js';



export default function AdminScreen() {

  const navigate = useNavigate();

  useEffect(() =>{
    const userInfo = localStorage.getItem("userInfo");
    if(!userInfo){
      navigate("/login")
    }
  }, [navigate])


  return (
    <div>
        <PatientInfoNav/>
        
        {/* <Search/> */}
        
    </div>
  )
}
