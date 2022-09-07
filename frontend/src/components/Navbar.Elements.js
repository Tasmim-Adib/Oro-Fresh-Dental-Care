import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.style.css';


export default function NavbarElements() {

  return(
      <div>
          <div className="nav_bar">
            <div className="nav_logo">
              <img src = "images/white.png" alt = "logo"/>
              <h1>Oro Fresh Dental Care</h1>
            </div>

            <div className="nav_link">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/service">Service</Link>
              <Link to="/contact">Contact</Link>
              <Link to ="/admin">Admin</Link>
            </div>
            <Link to="/contact"><button>Appointment</button></Link>
          </div>
      </div>
  );
}
