import React from 'react';
import '../css/CommentStyle.css';

export default function Comment(props) {
  return(
      <div>
          <div className="card-intro">
            <div className="card-details">
                <img src={props.icon} alt={props.name}/>
                <div className="card-content">
                    <p> {props.comment}
                    </p>
                    <h3> - {props.name}</h3>
                    <h4>Dental Patient</h4>
                </div>
            </div>
          </div>
      </div>
  );
}
