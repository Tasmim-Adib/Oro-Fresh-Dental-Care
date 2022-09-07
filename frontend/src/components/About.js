import React from 'react';
import '../css/AboutStyle.css';

export default function About() {
  return (
    <div>
        <div className="about_us"> 
            <h1>About Us</h1>  
            <hr className="dotted-hr"/>
            <div className="about-us-content">
                <img className="" src="../images/about.jpg" alt="about us"/>
                <div className="about-us-details">
                    
                    <p>As a leading industry innovator, Oro Fresh Dental Care is oppening up new opportunities,
                        for dental patients.Contact us to find out what we have offer you.</p>
                    <div className="card-desc">
                        <div className="skill-container">
                            <ul>
                                <li className="experience-skill">Experience Dentist <span>85%</span></li>
                                <li className="equipment">Modern Equipment<span>60%</span></li>
                                <li className="staff">Friendly Staff<span>90%</span></li>
                    
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  );
}
