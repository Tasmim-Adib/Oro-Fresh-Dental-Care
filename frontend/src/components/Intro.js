import React from 'react';
import { Link } from 'react-router-dom';
import '../css/IntroStyle.css';

export default function Intro() {
  return (
    <div>
        <div className="intro">
            <div className="content">
                <h1>Easy Access To  <span>Great Dental Care </span>  Shouldn't Be A Matter Of Luck</h1>
                <Link to="/contact"><button>Get Started</button></Link>
            </div>
            <img src="images/home.jpg"/>
        </div>
    </div>
  );
}
