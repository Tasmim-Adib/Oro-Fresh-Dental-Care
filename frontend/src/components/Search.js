import React, {useState} from 'react';
import axios from 'axios';
import '../css/SearchStyle.css';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';



export default function Search() {

    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [isUpdate, setUpdate] = useState(false);
    const [upDue, setUpdue] = useState("");
    const [upNext, setUpNext] = useState("");
    const [upGenBtnShow, setUpGenBtnShow] = useState(false);

    const handleUpdate = (e) =>{
        e.preventDefault();
        setUpdate(true);
    }

    const saveUpdate = async (e) =>{
        e.preventDefault();
        const updateData = {
            due : upDue,
            nextVisit : upNext
        };
        axios({
            url : `http://localhost:5000/update/${data._id}`,
            method : 'PATCH',
            data : updateData
        }).then((res) =>{
            alert(res.data.msg)
            setUpGenBtnShow(true);
        }).catch((err) =>{
            alert(err.message)
        });

    }

    const handleSearch = async (e) =>{
        e.preventDefault();
        return await axios
        .get(`http://localhost:5000/patients?contact=${value}`)
        .then((response) => {
            setData(response.data);
            setValue("");
            
        })
        .catch((err) => console.log(err.message));
         
    }

    const showUpGenPdf = ()=>{
        var doc = new jsPDF('p', 'pt');
            
        doc.setFontSize(18)
        doc.setFont('helvetica', 'bold');
          
        doc.text('Oro Fresh Dental Care', 200,30).setFontSize(13).setFont('helvetica', 'bold');
        doc.text('Your Perfect Smile Partner', 218,48).setFontSize(13).setFont('helvetica', 'normal');
        doc.text('68, Mohakhali Community Center Market, Shop - 5 & 16', 140,66);
        doc.text("Gulshan, Dhaka - 1212 || Cell : 01715 243393", 165,84);
        doc.setFont('helvetica', 'bold');
        doc.text(50, 118,`Name : ${data.name}`);
        doc.text(50, 136, `Age : ${data.age}`);
        doc.text(200, 136, `Sex : ${data.sex}`);
        doc.text(370, 136, `Contact : ${data.contact}`);
        doc.text(50, 154, `Reference : ${data.reference}`);
        doc.text(50, 172, `Area : ${data.area}`);

        doc.text('Medical History', 235, 203).setFontSize(13).setFont('helvetica','bold');
        autoTable(doc, {
            startY : 218,
            head : [['Diabetics', 'Heart Diseases', 'Hepatities', 'Kidney Diseases', 'Drug Reaction']],
            body : [[`${data.medicalHistory.isDiabetics ? "Yes" : "-"}`, ` ${data.medicalHistory.isHeartDiseases ? "Yes" : "-"}`, `${data.medicalHistory.isHepatities ? "Yes" : "-"}`,
            `${data.medicalHistory.isKidneyDiseases ? "Yes" : "-"}`, `${data.medicalHistory.isDrugReaction ? "Yes" : "-"}`]]
        })

        doc.text('Problem', 255, 298);
            autoTable(doc, {
                startY : 313,
                head : [['Calculass, Plaque, Stain, Stone','Gum Bleeding','Foul Odor']],
                body : [[`${data.problem.calculass ? "Yes" : "-"}`, `${data.problem.gumBleeding ? "Yes" : "-"}`, `${data.problem.odor ? "Yes" : "-"}`]]
            })

    
            doc.text('Treatment', 255, 393);
            autoTable(doc, {
                startY : 408,
                head : [['Resoration', 'Conservetives', 'Endodontics', 'Prosthodontics', 'Orthodontics']],
                body : [[`${data.treatment.resoration ? "Yes" : "-"}`, `${data.treatment.conservetives ? "Yes" : "-"}`, `${data.treatment.indodontics ? "Yes" : "-"}`,
                    `${data.treatment.prosthodontics ? "Yes" : "-"}`, `${data.treatment.orthodontics ? "Yes" : "-"}`]]
            })

            autoTable(doc, {
                head : [['Surgery', 'Periodontics', 'Prevention', 'Medication','Asthetics']],
                body : [[`${data.treatment.surgery ? "Yes" : "-"}`, `${data.treatment.periodontics ? "Yes" : "-"}`, `${data.treatment.prevention ? "Yes" : "-"}`,
                 `${data.treatment.medication ? "Yes" : "-"}`, `${data.treatment.asthetics ? "Yes" : "-"}`]]
            })
        
    
            doc.text(70, 548, `Past Case History : ${data.pastCaseOption}`);
            doc.text(350, 548, `Radiological History : ${data.radiologicalHistory}`);
            
            
            doc.text('Pain On', 255, 588);
            autoTable(doc, {
                startY : 603,
                head : [['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight','Nine', 'Ten','Eleven']],
                body : [[`${data.painOn.one ? "Yes" : "-"}`, `${data.painOn.two ? "Yes" : "-"}`, `${data.painOn.three ? "Yes" : "-"}`, `${data.painOn.four ? "Yes" : "-"}`, `${data.painOn.five ? "Yes" : "-"}`,
                `${data.painOn.six ? "Yes" : "-"}`, `${data.painOn.seven ? "Yes" : "-"}`, `${data.painOn.eight ? "Yes" : "-"}`, `${data.painOn.nine ? "Yes" : "-" }`, `${data.painOn.ten ? "Yes" : "-"}`, `${data.painOn.eleven ? "Yes" : "-"}`]]

            })
            
            autoTable(doc, {
                startY : 663,
                head : [['Position', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight']],
                body : [
                    ['Upper Left', `${data.upper_left.one ? "Yes" : "-"}`, `${data.upper_left.two ? "Yes" : "-"}`, `${data.upper_left.three ? "Yes" : "-"}`,
                    `${data.upper_left.four ? "Yes" : "-"}`, `${data.upper_left.five ? "Yes" : "-"}`, `${data.upper_left.six ? "Yes" : "-"}`, `${data.upper_left.seven ? "Yes" : "-"}`,
                    `${data.upper_left.eight ? "Yes" : "-"}` ],


                    ['Upper Right', `${data.upper_right.one ? "Yes" : "-"}`, `${data.upper_right.two ? "Yes" : "-"}`, `${data.upper_right.three ? "Yes" : "-"}`,
                    `${data.upper_right.four ? "Yes" : "-"}`, `${data.upper_right.five ? "Yes" : "-"}`, `${data.upper_right.six ? "Yes" : "-"}`, `${data.upper_right.seven ? "Yes" : "-"}`,
                    `${data.upper_right.eight ? "Yes" : "-"}` ],

                    ['Lower Left', `${data.lower_left.one ? "Yes" : "-"}`, `${data.lower_left.two ? "Yes" : "-"}`, `${data.lower_left.three ? "Yes" : "-"}`,
                    `${data.lower_left.four ? "Yes" : "-"}`, `${data.lower_left.five ? "Yes" : "-"}`, `${data.lower_left.six ? "Yes" : "-"}`, `${data.lower_left.seven ? "Yes" : "-"}`,
                    `${data.lower_left.eight ? "Yes" : "-"}` ],

                    ['Lower Right', `${data.lower_right.one ? "Yes" : "-"}`, `${data.lower_right.two ? "Yes" : "-"}`, `${data.lower_right.three ? "Yes" : "-"}`,
                    `${data.lower_right.four ? "Yes" : "-"}`, `${data.lower_right.five ? "Yes" : "-"}`, `${data.lower_right.six ? "Yes" : "-"}`, `${data.lower_right.seven ? "Yes" : "-"}`,
                    `${data.lower_right.eight ? "Yes" : "-"}` ]
                ]
            })
    
        
            doc.addPage();

            autoTable(doc, {
                head : [['Name', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'U', 'L', 'L', 'R']],
                body : [['BDR', `${data.BDR.one ? "Yes" : "-"}`,`${data.BDR.two ? "Yes" : "-"}`, `${data.BDR.three ? "Yes" : "-"}`, `${data.BDR.four ? "Yes" : "-"}`,
                `${data.BDR.five ? "Yes" : "-"}`, `${data.BDR.six ? "Yes" : "-"}`, `${data.BDR.seven ? "Yes" : "-"}`, `${data.BDR.eight ? "Yes" : "-"}`, `${data.BDR.nine ? "Yes" : "-"}`,
                `${data.BDR.u ? "Yes" : "-"}`, `${data.BDR.first_L ? "Yes" : "-"}`,`${data.BDR.second_L ? "Yes" : "-"}`,`${data.BDR.r ? "Yes" : "-"}`],
                
                ['BDC', `${data.BDC.one ? "Yes" : "-"}`,`${data.BDC.two ? "Yes" : "-"}`, `${data.BDC.three ? "Yes" : "-"}`, `${data.BDC.four ? "Yes" : "-"}`,
                `${data.BDC.five ? "Yes" : "-"}`, `${data.BDC.six ? "Yes" : "-"}`, `${data.BDC.seven ? "Yes" : "-"}`, `${data.BDC.eight ? "Yes" : "-"}`, `${data.BDC.nine ? "Yes" : "-"}`,
                `${data.BDC.u ? "Yes" : "-"}`, `${data.BDC.first_L ? "Yes" : "-"}`,`${data.BDC.second_L ? "Yes" : "-"}`,`${data.BDC.r ? "Yes" : "-"}`],
                
            ]
            })

            doc.text("Attrition : ", 55, 170);
            doc.setFont('helvetica', 'normal');
            doc.text(`${data.AfterBDR.attrition ? "Yes" : "No"}`, 118, 170);
            doc.setFont('helvetica', 'bold');
            doc.text("Abration : ", 220, 170);
            doc.setFont('helvetica', 'normal');
            doc.text(`${data.AfterBDR.abration ? "Yes" : "No"}`,285, 170);
            doc.setFont('helvetica','bold');
            doc.text("Irrotion : ", 390, 170);
            doc.setFont('helvetica', 'normal');
            doc.text(`${data.AfterBDR.irrotion ? "Yes" : "No"}`,450, 170);
            
            doc.setFont('helvetica','bold');
            doc.text('Payment & Visit', 235, 230);
            doc.setFont('helvetica','bold');
            doc.text("Total : ",170, 255);
            doc.setFont('helvetica', 'normal');
            doc.text(`${data.totalCost}`, 215, 255);
            doc.text(" tk", 250, 255);
             
            doc.setFont('helvetica','bold');
            doc.text("Due : ", 170, 273);
            doc.setFont('helvetica', 'normal');
            doc.text(`${upDue}`, 205, 273)
            doc.text("tk", 240, 273)
            
            doc.setFont('helvetica','bold');
            doc.text("Date of Appointment : ", 170, 291);
            doc.setFont('helvetica', 'normal');
            doc.text(`${data.appointment}`, 315, 291);

            doc.setFont('helvetica','bold');
            doc.text("Next Visit : ", 170, 309);
            doc.setFont('helvetica', 'normal');
            doc.text(`${upNext}`, 250, 309);

            doc.setFont('helvetica','bold');
            doc.setDrawColor(0, 0, 0);
            doc.line(430,430,520,430);

            doc.text("Signature", 445, 445)
            
            var dt = new Date();
            
            doc.setFont('helvetica','normal');
            doc.setFontSize(10);
            doc.text("Updated : ", 120, 480);
            doc.text(`${dt}`, 170, 480);

        doc.save('patient.pdf');
            
    }
    
  return (
    <div>
        <form onSubmit = {handleSearch}>
            <div className= "btn">
                <div className = "search_icon">
                    <input type = "Number" name = "cont" placeholder="Contact No" value={value} onChange ={(e) => setValue(e.target.value)}/>
                    <button type = "submit">Search</button>
                    
                </div>
                <Link to = "/newPatient"><button>New Patient</button></Link>
                <Link to = "/showAppointments"><button>View Appointment</button></Link>
            </div>
        </form>

            <div className="divider">
                <div className="identity">
                    <p className = "patient_header">Patient Identification</p>
                    <div className="identity_content">
                        <li>Name : {data.name}</li>
                        <li>Age : {data.age}</li>
                        <li>Sex : {data.sex}</li>
                        <li>Contact :0 {data.contact}</li>
                        <li>Reference : {data.reference}</li>
                        <li>Area : {data.area}</li>
                    </div>
                </div>
            </div>
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
                            {data.medicalHistory && Object.keys(data.medicalHistory).map((hist ,index) =>{                               
                                return(
                                    <td key={index}>{data.medicalHistory[hist] ?<img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
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
                            {data.treatment && Object.keys(data.treatment).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {data.treatment[hist] ?<img src =  "images/tick.jpg" alt = "Yes"/>  : "--"}</td>
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
                            <li>Past Case History : {data.pastCaseOption}</li>
                            <li>Radiological History : {data.radiologicalHistory}</li>

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
                            {data.painOn && Object.keys(data.painOn).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {data.painOn[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
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
                            {data.upper_left && Object.keys(data.upper_left).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {data.upper_left[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Upper Right</td>
                            {data.upper_right && Object.keys(data.upper_right).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {data.upper_right[hist] ?<img src =  "images/tick.jpg" alt = "Yes"/>: "--"} </td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Lower Left</td>
                            {data.lower_left && Object.keys(data.lower_left).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {data.lower_left[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Lower Right</td>
                            {data.lower_right && Object.keys(data.lower_right).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {data.lower_right[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
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
                            {data.BDR && Object.keys(data.BDR).map((hist ,index) =>{                               
                                return(
                                    <td key={index}> {data.BDR[hist] ? <img src =  "images/tick.jpg"  alt = "Yes"/> : "--"} </td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>BDC</td>
                            {data.BDC && Object.keys(data.BDC).map((hist ,index) =>{                               
                                return(
                                    <td key={index}>{data.BDC[hist] ? <img src =  "images/tick.jpg" alt = "Yes"/> : "--"} </td>
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
                            {data.AfterBDR && Object.keys(data.AfterBDR).map((hist ,index) =>{                               
                                return(
                                    <td key={index}>{data.AfterBDR[hist] ? <img src =  "images/tick.jpg" alt = "true/false"/>: "--"} </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>

            
            {isUpdate ? <div>
                <form>
                    <div className = "painON_align">
                        <div className="payment">
                            <p className="patient_p">Payment & Visit</p>
                            <div className = "name_age">
                                <div><label>Due</label><br/><input type = 'number' name = "upDue" value = {upDue} onChange={e => setUpdue(e.target.value)} required/></div>
                            </div>
                            <div className = "name_age">
                                <div><label>Next Visit</label><br/><input type = 'date' name = "upNext" value = {upNext} onChange={e => setUpNext(e.target.value)} required/></div>
                               
                            </div>
                        </div>
                    </div>
                </form>
            </div> 
            : <div className="divider">
                <div className="identity">
                    <p className = "patient_header">Payment & Visit</p>
                    <div className="identity_content">
                        <li>Total : {data.totalCost}</li>
                        <li>Due : {data.due}</li>
                        <li>Next Visit : {data.nextVisit}</li>
                        <li>Date of Appointment : {data.appointment}</li>
                    </div>
                </div>
            </div>}
            {isUpdate ? <div className = "centerBtn"><button onClick = {saveUpdate}>Save</button></div>   : <div className = "centerBtn"><button onClick = {handleUpdate}>Update</button></div>}
            {upGenBtnShow ? <div className = "centerBtn"><button onClick = {showUpGenPdf}>Updated PDF</button></div> : null}
            <div className = "imgStyle">
                <img src={data.pic} alt = "Prescription Not Found"/>
            </div>
            
        
    </div>
  )
}
