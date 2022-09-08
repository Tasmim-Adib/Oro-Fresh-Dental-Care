import React from 'react'

export default function SearchData(props) {
  return (
    <div>
        <div className='boxed'>
            <fieldset>
                <legend>Patient's Information</legend>
                <div className='design_input_Data'>
                <h3>Name : {props.name}</h3>
                <h3>Age : {props.age}</h3>
                <h3>Contact No : {props.contact}</h3>
                </div>
                <div className='design_input_Data'>
                <h3>Height : {props.height}</h3>
                <h3>Weight : {props.weight}</h3>
                <h3>Glucose : {props.glucose}</h3>
                </div>
                
                <div className='design_input_Data'>
                <h3>Blood Pressure  Systol : {props.systol}</h3>
                <h3>Diastol : {props.diastol}</h3>
                </div>
                
                <div className='design_input_Data'>
                <h3>Pulse : {props.pulse}</h3>
                <h3>Temperature : {props.temperature}</h3>
                <h3>Oxygen Saturation : {props.oxygen}</h3>
                </div>
                
            </fieldset>
        </div>

        <div className='boxed'>
            <fieldset>
                <legend>Diagnosis Result</legend>
                <h3>Problem : {props.problemStatement}</h3>
                <h3>Symptom : {props.symptom}</h3>
                <h3>Diagnosis : {props.diagnosis}</h3>
                <h3>Advice : {props.advice}</h3>
                <h3>Comment : {props.comment}</h3>
                <div className = "container">
                    <h2>Medical History</h2>
                    <hr className="dotted-hr"/>
                    <table className = "table_content">
                        <thead>
                            <tr>
                                <th>Diabetics</th>
                                <th>Heart Diseases</th>
                                <th>Hepatities</th>
                                <th>Kidney Diseases</th>
                                <th>Drug Reaction</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {props.medicalHistory && Object.keys(props.medicalHistory).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}>{props.medicalHistory[hist] ?<img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                    )
                                })}
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div className = "container">
                    <h2>Problem</h2>
                    <hr className="dotted-hr"/>
                    <table className = "table_content">
                        <thead>
                            <tr>
                                <th>Foul Odor</th>
                                <th>Gum Bleeding</th>
                                <th>Calculass Palque, Stain, Stone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {props.problem && Object.keys(props.problem).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}>{props.problem[hist] ?<img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                    )
                                })}
                            </tr>
                        </tbody>

                    </table>
                </div>

                <h2>Treatment</h2>
                <hr className="dotted-hr"/>
                <div className = "container"> 
                    <table className = "table_content">
                        <thead>
                            <tr>
                                <th>Resoration</th>
                                <th>Conservetives</th>
                                <th>Endodontics</th>
                                <th>Prosthodontics</th>
                                <th>Orthodontics</th>
                                <th>Surgery</th>
                                <th>Periodontics</th>
                                <th>Prevention</th>
                                <th>Medication</th>
                                <th>Asthetics</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {props.treatment && Object.keys(props.treatment).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}> {props.treatment[hist] ?<img src =  "images/tick.jpg" alt = "Yes"/>  : "--"}</td>
                                    )
                                })}
                            </tr>
                        </tbody>

                    </table>
                </div>

                <div>
                    <div className = "divider">
                        <div className = "identity">
                            <p className = "patient_header">Case History</p>
                            <div className ="identity_content">
                                <li>Past Case History : {props.pastCaseOption}</li>
                                <li>Radiological History : {props.radiologicalHistory}</li>

                            </div>
                        </div>
                    </div>
                    
                </div>

                <h2>Pain On </h2>
                <hr className="dotted-hr"/>
                <div className = "container">
                    <table className = "table_content">
                        <thead>
                            <tr>
                                <th>one</th>
                                <th>Two</th>
                                <th>Three</th>
                                <th>Four</th>
                                <th>Five</th>
                                <th>Six</th>
                                <th>Seven</th>
                                <th>Eight</th>
                                <th>Nine</th>
                                <th>Ten</th>
                                <th>Eleven</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {props.painOn && Object.keys(props.painOn).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}> {props.painOn[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container">
                    <table className = "table_content">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>one</th>
                                <th>Two</th>
                                <th>Three</th>
                                <th>Four</th>
                                <th>Five</th>
                                <th>Six</th>
                                <th>Seven</th>
                                <th>Eight</th>
                                
                            </tr>
                            
                        </thead>
                        <tbody>

                            <tr>
                                <td>Upper Left</td>
                                {props.upper_left && Object.keys(props.upper_left).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}> {props.upper_left[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                    )
                                })}
                            </tr>
                            <tr>
                                <td>Upper Right</td>
                                {props.upper_right && Object.keys(props.upper_right).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}> {props.upper_right[hist] ?<img src =  "images/tick.jpg" alt = "Yes"/>: "--"} </td>
                                    )
                                })}
                            </tr>
                            <tr>
                                <td>Lower Left</td>
                                {props.lower_left && Object.keys(props.lower_left).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}> {props.lower_left[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                    )
                                })}
                            </tr>
                            <tr>
                                <td>Lower Right</td>
                                {props.lower_right && Object.keys(props.lower_right).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}> {props.lower_right[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>


                <h2>BDR / BDC</h2>
                <hr className="dotted-hr"/>
                <div className = "container">
                    <table className = "table_content">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>one</th>
                                <th>Two</th>
                                <th>Three</th>
                                <th>Four</th>
                                <th>Five</th>
                                <th>Six</th>
                                <th>Seven</th>
                                <th>Eight</th>
                                <th>Nine</th>
                                <th>U</th>
                                <th>L</th>
                                <th>L</th>
                                <th>R</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BDR</td>
                                { props.BDR && Object.keys( props.BDR).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}> { props.BDR[hist] ? <img src =  "images/tick.jpg"  alt = "Yes"/> : "--"} </td>
                                    )
                                })}
                            </tr>
                            <tr>
                                <td>BDC</td>
                                { props.BDC && Object.keys( props.BDC).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}>{ props.BDC[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className= "container">
                    <table className = "table_content">
                        <thead>
                            <tr>
                                <th>Attrition</th>
                                <th>Abration</th>
                                <th>Irrotion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                { props.AfterBDR && Object.keys( props.AfterBDR).map((hist ,index) =>{                               
                                    return(
                                        <td key={index}>{ props.AfterBDR[hist] ? <img src =  "images/tick.jpg" alt = "true/false"/>: "--"} </td>
                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </fieldset>
        </div>


        <div className='boxed'>
            <fieldset>
                <legend>Cost & Date</legend>
                <div className='design_cost_Data'>
                    <h3>Total : {props.total}</h3>
                    <h3>Due : {props.due}</h3>
                </div>
                <div className='design_cost_Data'>
                    <h3>Next Visit : {props.nextVisit}</h3>
                    <h3>dateOfAppointment : {props.dateOfAppointment}</h3>
                </div>
            </fieldset>
        </div>

        <div className='boxed'>
            <fieldset>
                <legend>Preview</legend>
                <h3>Preview : {props.preview}</h3>
            </fieldset>
        </div>

        <div className = "imgStyle">
            <img src={props.pic} alt = "Prescription Not Found"/>
        </div>
    </div>
  )
}
