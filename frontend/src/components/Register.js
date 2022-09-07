
import axios from 'axios';
import React, {useState} from 'react'


export default function Register() {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    const handleRegistration = async (e) =>{
        e.preventDefault();
        const user = {
            email : email,
            password : pass
        };

        axios({
            url : 'http://localhost:5000/auth/register',
            method : "POST",
            data : user
        }).then((response) =>{
            localStorage.setItem("userInfo", JSON.stringify(user))
            console.log(response.data);
        }).catch((err) =>{
            console.log(err.message)
        })
    }
  return (
    <div>
        <form onSubmit = {handleRegistration}>
            <div><label>PQREL</label><br/><input type = 'email' name = "email" value = {email} onChange={e => setEmail(e.target.value)} required/></div>
            <div><label>XYZPQ</label><br/><input type = 'password' name = "pass" value = {pass} onChange={e => setPassword(e.target.value)} required/></div>
            <button type = "submit">Cancel</button>
        </form>
    </div>
  )
}
