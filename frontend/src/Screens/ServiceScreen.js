import React from 'react';
import Contact from '../components/Contact';
import Service from '../components/Service';
import Slider from '../components/Slider';

export default function ServiceScreen() {
  return(
      <div>
          <Service/>
          <Slider/>
          <Contact/>
      </div>
  );
}
