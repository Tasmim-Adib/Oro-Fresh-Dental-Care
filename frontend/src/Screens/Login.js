import axios from 'axios';
import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import '../css/loginStyle.css';

export default function Login() {
    const [email , setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) =>{
        event.preventDefault();
        const user = {
            email : email,
            password : pass
        }
        axios({
            url : 'http://localhost:5000/auth/signin',
            method : "POST",
            data : user
        }).then((response) =>{
            localStorage.setItem("userInfo", JSON.stringify(user));
            navigate("/admin");
        }).catch((err) =>{
            console.log(err.message)
        })
    }

  return (
    <div>
        <form onSubmit = {handleLogin}>
            <div className = "loginPage">
                <div><label>Email</label><br/><input type = 'email' name = "email" value = {email} onChange={e => setEmail(e.target.value)} required/></div>
                <div><label>Password</label><br/><input type = 'password' name = "pass" value = {pass} onChange={e => setPassword(e.target.value)} required/></div>
                <button type = "submit">Login</button>
            </div>
        </form>
    </div>
  )
}
