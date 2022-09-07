import React from 'react';
import About from '../components/About';
import Achievement from '../components/achievement';
import Contact from '../components/Contact';
import Slider from '../components/Slider';

export default function AboutScreen() {
  return(
      <div>
          <About/>
          <Achievement/>
          <Slider/>
          <Contact/>
      </div>
  );
}
