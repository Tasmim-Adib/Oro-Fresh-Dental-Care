import axios from 'axios';
import React, { useState, useEffect } from 'react'
import '../css/ShowAppoint.css';
import { useNavigate } from 'react-router-dom';


export default function ShowAppointment() {

    const [data, setData] = useState([]); 
    const [viewDate, setViewDate] = useState("");
    const navigate = useNavigate();


    useEffect(() =>{
        const userInfo = localStorage.getItem("userInfo");
        if(!userInfo){
          navigate("/login")
        }
      }, [navigate])

    const handleToday = async (e) =>{
            
        e.preventDefault();
        return await axios
        .get(`http://localhost:5000/showAppointments?date=${viewDate}`)
        .then((response) => {
            setData(response.data);    
        })
        .catch((err) => console.log(err.message));
    }

  return (
    <div>
        <form onSubmit = {handleToday} style = {{
            display : 'flex',
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'center'
        }}>
            <input type = "date" name = "viewDate" value = {viewDate} onChange = {e => setViewDate(e.target.value)}/>
            <button>Show</button>
        </form>

        <div className="container">
            <table className = "table_content">
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>Date</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {data.map((list, index) =>{
                        return(
                            <tr key = {index}>
                                <td>{index + 1}</td>
                                <td>{list.name}</td>
                                <td>{list.contact}</td>
                                <td>{list.date}</td>                                
                            </tr>
                        )
                    })}
                </tbody>
                
            </table>
        </div>
    </div>
  )
}
