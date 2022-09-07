import React from 'react';
import { Link } from 'react-router-dom';
import '../css/FooterStyle.css';

export default function Footer() {
  return (
      <footer>
        <div className="footer-container">
                <div className="footer sec footer-aboutus">
                  <h4>About Us</h4>
                  <p>As a leading industry innovator, Oro Fresh Dental Care is oppening up new opportunities,
                        for dental patients.Contact us to find out what we have offer you.</p>
                      <div className="footer-sci">
                        <Link to="/"><img src="/images/facebook.png"></img></Link>
                        <Link to="/about"><img src="/images/instagram.png"></img></Link>
                        <Link to="/service"><img src="/images/twitter.png"></img></Link>
                        <Link to="/contact"><img src="/images/linkedin.png"></img></Link>
                    </div>
                </div>

                <div className="footer-sec footer-quickLink">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link className="list-link" to="/">Home</Link></li>
                        <li> <Link className="list-link" to="/about">About</Link></li>
                        <li><Link className="list-link" to="/service">Service</Link></li>
                        <li><Link className="list-link" to="/contact">Contact</Link></li>
                        <li><Link className="list-link" to="/contact">Appointment</Link></li>
                        <li><Link className="list-link" to="/admin">Admin</Link></li>
                    </ul>
                </div>

            <div className="footer-sec footer-contact">
                <h4>Contact</h4>
                <ul>
                   
                    <li><span>Mohakhali, Gulshan - 1, Dhaka</span></li>
                    <li><span>01715 243393</span></li>
                    <li><span>mdshazzadhossain@gmail.com</span></li>
                </ul>
            </div>
                
        </div>
      </footer>
      
  );
  
                          
}
