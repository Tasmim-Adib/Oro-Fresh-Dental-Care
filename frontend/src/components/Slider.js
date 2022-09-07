import React from 'react';
import Carousel from 'react-elastic-carousel';
import Comment from './Comment';
import '../css/CommentStyle.css';

export default function Slider() {
  return(
      <div className="card">
          <div className="slider-back">
            <h1>Our Patient Says</h1>
            <hr className="dotted-hr-slider"/>
            
            <Carousel>
                <Comment icon ={"/images/imranVai.jpg"}  name= {"Imran Hossain"} comment = {" I'd have been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentist is very reassuring and very helpful. Excellent treatment and advice. "}/>
                <Comment icon ={"/images/vojon.jpg"}  name= {"Shazzad Hossain Chowdhury"} comment = {" I'd have been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentist is very reassuring and very helpful. Excellent treatment and advice. "}/>
                <Comment icon ={"/images/pic.jpg"}  name= {"Tasmim Rahman Adib"} comment = {" I'd have been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentist is very reassuring and very helpful. Excellent treatment and advice. "}/>
    
            </Carousel>
          </div>
      </div>
  );
}
