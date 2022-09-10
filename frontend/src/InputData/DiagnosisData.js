import React from 'react'

export default function DiagnosisData({problemStatement,symptom,diagnosis,advice,comment,medicalHistory,treatment,problem ,pastCaseOption,radiologicalHistory,painOn,upper_left,upper_right,lower_left,lower_right,BDR,BDC,AfterBDR}) {
  return (
    <div className='boxed'>
        <fieldset>
            <legend>Diagnosis Result</legend>
            <h3>Problem : {problemStatement}</h3>
            <h3>Symptom : {symptom}</h3>
            <h3>Diagnosis : {diagnosis}</h3>
            <h3>Advice : {advice}</h3>
            <h3>Comment : {comment}</h3>
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
                            {medicalHistory && Object.keys(medicalHistory).map((hist ,index) =>{                               
                                return(
                                    <td key={index}>{medicalHistory[hist] ?<img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
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
                            {problem && Object.keys(problem).map((hist ,index) =>{                               
                                return(
                                    <td key={index}>{problem[hist] ?<img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
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
                            {/* <th>Orthodontics</th>
                            <th>Surgery</th>
                            <th>Periodontics</th>
                            <th>Prevention</th>
                            <th>Medication</th>
                            <th>Asthetics</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{treatment.resoration ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"}</td>
                            <td>{treatment.conservetives ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"}</td>
                            <td>{treatment.resoration ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"}</td>
                            <td>{treatment.resoration ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"}</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>Orthodontics</th>
                            <th>Surgery</th>
                            <th>Periodontics</th>
                            <th>Prevention</th>
                            {/*<th>Medication</th>
                            <th>Asthetics</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{treatment.orthodontics ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"}</td>
                            <td>{treatment.surgery ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"}</td>
                            <td>{treatment.periodontics ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"}</td>
                            <td>{treatment.prevention ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"}</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>Medication</th>
                            <th>Asthetics</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{treatment.medication ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"}</td>
                            <td>{treatment.asthetics ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"}</td>
                        </tr>
                    </tbody>

                </table>
            </div>

            <div>
                <div className = "divider">
                    <div className = "identity">
                        <p className = "patient_header">Case History</p>
                        <div className ="identity_content">
                            <li>Past Case History : {pastCaseOption}</li>
                            <li>Radiological History : {radiologicalHistory}</li>

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
                            {painOn && Object.keys(painOn).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {painOn[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
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
                            {upper_left && Object.keys(upper_left).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {upper_left[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Upper Right</td>
                            {upper_right && Object.keys(upper_right).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {upper_right[hist] ?<img src =  "images/tick.jpg" alt = "Yes"/>: "--"} </td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Lower Left</td>
                            {lower_left && Object.keys(lower_left).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {lower_left[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Lower Right</td>
                            {lower_right && Object.keys(lower_right).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {lower_right[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
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
                            { BDR && Object.keys( BDR).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> { BDR[hist] ? <img src =  "images/tick.jpg"  alt = "Yes"/> : "--"} </td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>BDC</td>
                            { BDC && Object.keys( BDC).map((hist ,index) =>{                               
                                return(
                                    <td key={index}>{ BDC[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
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
                            { AfterBDR && Object.keys( AfterBDR).map((hist ,index) =>{                               
                                return(
                                    <td key={index}>{ AfterBDR[hist] ? <img src =  "images/tick.jpg" alt = "true/false"/>: "--"} </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </fieldset>
    </div>
  )
}
