import React, {useState} from 'react'
import '../css/Appointment.css'
import axios from 'axios';


export default function Contact() {
    
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        const appointData = {
            name : name,
            contact : contact,
            date : date
        };

        axios({
            url : 'http://localhost:5000/appointment',
            method : 'POST',
            data : appointData
        }).then((res) =>{
            alert(res.data.msg);
        }).catch((err) =>{
            alert(err.message);
        });
    }
  return (
    <div className = "contact">
        <h1>Appointment</h1>
        <hr className="dotted-hr"/>
        <form onSubmit = {handleSubmit}>
            <div className="appointment">
    
                <div><label>Name</label><br/> <input className='patientName' type = 'text' name = "patientName" value = {name} onChange ={(e) => setName(e.target.value)}/></div>
                <div><label>Date Of Appointment</label><br/> <input type = 'date' name = "date" value = {date} onChange ={(e) => setDate(e.target.value)}/></div>               
                <div><label>Contact No</label><br/><input className='patientName' type = 'text' name = "patientContact" value = {contact} onChange ={(e) => setContact(e.target.value)}/></div>

            </div>
            <div className = "appoint_btn">
                <p className = "disclaimer"> ** Friday & Saturday is Off !! **</p>
                <button type = "submit">Submit</button>
            </div>
            
        </form>
    </div>
  )
}
