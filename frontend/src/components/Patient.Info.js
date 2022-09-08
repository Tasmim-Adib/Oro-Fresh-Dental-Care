import React, { useState } from 'react'
import "../css/PatientInfo.style.css"
const initialValues = {
	name : "",
	age : null,
	contact : null,
	height : null,
	weight : null,
	systol : null,
	diastol : null,
	glucose : null,
	pulse : null,
	temperature : null,
	oxygen : null,
	isPatientShow : true
};
export default function PatientInfo(props) {
    const [values, setValues] = useState(initialValues);
	const handleInputChange = (e) =>{
		const {name, value} = e.target;
		setValues({
			...values,
			[name] :value,
		});
	};

	const handleSubmit = (e) =>{
		e.preventDefault();
		props.onSubmit(values)
	}
    return (
		<div className = "boxed">
			<fieldset>
				<legend>Patient's Information</legend>
				<form onSubmit={handleSubmit}>
					<label>Name : </label> <input type = "text" name = "name" value = {values.name} onChange={handleInputChange}/><br/>
					<label>Age : </label> <input type = "number" name = "age" value = {values.age} onChange={handleInputChange}/><br/>
					<label>Contact : </label> <input type = "number" name = "contact" value = {values.contact} onChange={handleInputChange}/><br/>
					<label>Height (cm) : </label> <input type = "number" name = "height" value = {values.height} onChange={handleInputChange}/><br/>
					<label>Weight (kg) : </label> <input type = "number" name = "weight" value = {values.weight} onChange={handleInputChange}/><br/>
					<div className = "blood_pressure">
						<div>
							Blood Pressure <label>Systol : </label> <input type = "number" name = "systol" value = {values.systol} onChange={handleInputChange}/><br/>
						</div>
						<div>
							<label>Diastol : </label> <input type = "number" name = "diastol" value = {values.diastol} onChange={handleInputChange}/><br/>
						</div>
					</div>
					<label>Glucose : </label> <input type = "number" name = "glucose" value = {values.glucose} onChange={handleInputChange}/><br/>

					<label>Pulse : </label> <input type = "number" name = "pulse" value = {values.pulse} onChange={handleInputChange}/><br/>
					<label>Temperature (celcius) : </label> <input type = "number" name = "temperature" value = {values.temperature} onChange={handleInputChange}/><br/>
					<label>Oxygen Saturation : </label> <input type = "number" name = "oxygen" value = {values.oxygen} onChange={handleInputChange}/>

					<div className = "centerBtn"><button type='submit'>Next</button></div>
				</form>
			</fieldset>
		
		</div>
		
    )
}
