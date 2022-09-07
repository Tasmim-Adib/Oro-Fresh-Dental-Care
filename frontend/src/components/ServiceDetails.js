import React from 'react';
import '../css/serviceDetailsStyle.css';

export default function ServiceDetails(props) {
  return (
    <div>
        <div className="service-content">
            <img src={props.icon} alt={props.title}/>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    </div>
  );
}
