import React from 'react'
// design_input_data.css is in PatientInfoNav.js

export default function AllData({name,age,contact,height,weight,systol,diastol,glucose,pulse,temperature,oxygen}) {

  return (
    <div className='boxed'>
      <fieldset>
        <legend>Patient's Information</legend>
        <div className='design_input_Data'>
          <h3>Name : {name}</h3>
          <h3>Age : {age}</h3>
          <h3>Contact No : {contact}</h3>
        </div>
        <div className='design_input_Data'>
          <h3>Height : {height}</h3>
          <h3>Weight : {weight}</h3>
          <h3>Glucose : {glucose}</h3>
        </div>
        
        <div className='design_input_Data'>
          <h3>Blood Pressure  Systol : {systol}</h3>
          <h3>Diastol : {diastol}</h3>
        </div>
        
        <div className='design_input_Data'>
          <h3>Pulse : {pulse}</h3>
          <h3>Temperature : {temperature}</h3>
          <h3>Oxygen Saturation : {oxygen}</h3>
        </div>
        
      </fieldset>
        
    </div>
  )
}
