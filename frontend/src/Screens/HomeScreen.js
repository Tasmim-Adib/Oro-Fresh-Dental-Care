import React from 'react';
import About from '../components/About';
import Achievement from '../components/achievement';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import Service from '../components/Service';
import Slider from '../components/Slider';


export default function HomeScreen() {

    
  return(
      <div>
        <Intro/>
        <About/>
        <Achievement/>
        <Service/>
        <Slider/>
        <Contact/>
        
      </div>
  );
}
