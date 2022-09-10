import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import "../css/patientInfoNav.css"
import PatientInfo from './Patient.Info';
import DemoDiagnosis from './demoDiagnosis';
import PatientMedicine from './PatientMedicine';
import PatientCost from './PatientCost';
import PatientPreview from './PatientPreview';
import AllData from '../InputData/AllData';
import DiagnosisData from '../InputData/DiagnosisData';
import CostData from '../InputData/CostData';
import PreviewData from '../InputData/PreviewData';
import SearchData from './SearchData'

import jsPDF from 'jspdf';
import jsTable from 'jspdf-autotable';

const initialValues = {
	due : null,
    nextVisit : null
};

export default function PatientInfoNav() {
    const [values, setValues] = useState(initialValues);
	const handleInputChange = (e) =>{
		const {name, value} = e.target;
		setValues({
			...values,
			[name] :value,
		});
	};

    const [value, setValue] = useState("")
    const [isDataShow, setDataShow] = useState(false)
    const [data, setData] = useState([]);
    const [infoShow, setInfoShow] = useState(true)
    const [diagnosisShow, setDiagnosisShow] = useState(false)
    const [medicineShow, setMedicineShow] = useState(false)
    const [costShow, setCostShow] = useState(false)
    const [previewShow, setPreviewShow] = useState(false)
    const [isSubmit, setSubmit] = useState(false)
    const [allData, setAllData] = useState(false)
    const [infoData, setInfoData] = useState({})
    const [diagnosisData, setDiagnosisData] = useState({})
    const [costData, setCostData] = useState({})
    const [medicineData, SetMedicineData] = useState({})
    const [previewData, setPreviewData] = useState({})
    const [isErr, setErr] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [costUpdateBtn, setCostUpdateBtn] = useState(false)

    const handleSearch = async (e) =>{
        e.preventDefault();
        setLoading(true)
        return await axios
        .get(`http://localhost:5000/patients?contact=${value}`)
        .then((response) => {
            if(response.data.length === 0){
                setErr(true)
                setDataShow(false)
                setInfoShow(false)
                setSubmit(false) 
                setLoading(false)
            }
            else{
                setData(response.data);
                setValue("");
                setDataShow(true)
                setInfoShow(false)
                setSubmit(false)
                setLoading(false)
                setErr(false)   
            }
            
                      
        })
        .catch((err) => {
            setErr(true)
            setLoading(false)
        });

        
         
    }   

    const getInfoData = (val) =>{
        setInfoData(Object.assign({}, val))
        if(val.isPatientShow){
            setInfoShow(false)
            setDiagnosisShow(true)
        }
    }
    const getDiagnosisData = (val) =>{
        setDiagnosisData(Object.assign({}, val))
        if(val.isDiagnosis){
            setDiagnosisShow(false)
            setMedicineShow(true)
        }

    }
    const getMedicineData = (val) =>{
        SetMedicineData(Object.assign({}, val))
        if(val.isMedicine){
            setMedicineShow(false)
            setCostShow(true)
        }
    }
    const getCostData = (val) =>{
        setCostData(Object.assign({}, val))
        if(val.isCost){
            setCostShow(false)
            setPreviewShow(true)
        }
    }
    const getPreviewData = (val) =>{
        setPreviewData(Object.assign({}, val))
        if(val.isPreview){
            setPreviewShow(false)
            setAllData(true)            
        }
    }

    const handleSave = (e) =>{
        e.preventDefault()
        const payload = {
            name : infoData.name,
            age : infoData.age,
            contact : infoData.contact,
            height : infoData.height,
	        weight : infoData.weight,
	        systol : infoData.systol,
	        diastol : infoData.diastol,
	        glucose : infoData.glucose,
	        pulse : infoData.pusle,
	        temperature : infoData.temperature,
	        oxygen : infoData.oxygen,
            total : costData.total,
            due : costData.due,
            nextVisit : costData.nextVisit,
            dateOfAppointment : costData.dateOfAppointment,
            problemStatement : diagnosisData.problemStatement,
            symptom : diagnosisData.symptom,
            diagnosis : diagnosisData.diagnosis,
            advice : diagnosisData.advice,
            comment : diagnosisData.comment,
            medicalHistory : {
                isDiabetics : diagnosisData.medicalHistory.isDiabetics,
                isHeartDiseases : diagnosisData.medicalHistory.isHeartDiseases,
                isHepatities : diagnosisData.medicalHistory.isHepatities,
                isKidneyDiseases : diagnosisData.medicalHistory.isKidneyDiseases,
                isDrugReaction : diagnosisData.medicalHistory.isDrugReaction
            },
            treatment : {
                resoration : diagnosisData.treatment.resoration,
                conservetives : diagnosisData.treatment.conservetives,
                indodontics : diagnosisData.treatment.indodontics,
                prosthodontics : diagnosisData.treatment.prosthodontics,
                orthodontics : diagnosisData.treatment.orthodontics,
                surgery : diagnosisData.treatment.surgery,
                periodontics : diagnosisData.treatment.periodontics,
                prevention : diagnosisData.treatment.prevention,
                medication : diagnosisData.treatment.medication,
                asthetics : diagnosisData.treatment.asthetics
            },
            
            problem : {
                odor : diagnosisData.problem.odor,
                gumBleeding: diagnosisData.problem.gumBleeding,
                calculass : diagnosisData.problem.calculass
            },
            
            pastCaseOption : diagnosisData.pastCaseOption,
            radiologicalHistory : diagnosisData.radiologicalHistory,
            painOn : {
                one : diagnosisData.painOn.one,
                two : diagnosisData.painOn.two,
                three : diagnosisData.painOn.three,
                four : diagnosisData.painOn.four,
                five : diagnosisData.painOn.five,
                six : diagnosisData.painOn.six,
                seven : diagnosisData.painOn.seven,
                eight : diagnosisData.painOn.eight,
                nine : diagnosisData.painOn.nine,
                ten : diagnosisData.painOn.ten,
                eleven : diagnosisData.painOn.eleven
            },

            upper_left : {
                one : diagnosisData.upper_left.one,
                two : diagnosisData.upper_left.two,
                three : diagnosisData.upper_left.three,
                four : diagnosisData.upper_left.four,
                five : diagnosisData.upper_left.five,
                six : diagnosisData.upper_left.six,
                seven : diagnosisData.upper_left.seven,
                eight : diagnosisData.upper_left.eight
            },
            upper_right : {
                one : diagnosisData.upper_right.one,
                two : diagnosisData.upper_right.two,
                three : diagnosisData.upper_right.three,
                four : diagnosisData.upper_right.four,
                five : diagnosisData.upper_right.five,
                six : diagnosisData.upper_right.six,
                seven : diagnosisData.upper_right.seven,
                eight : diagnosisData.upper_right.eight   
            },

            lower_left : {
                one : diagnosisData.lower_left.one,
                two : diagnosisData.lower_left.two,
                three : diagnosisData.lower_left.three,
                four : diagnosisData.lower_left.four,
                five : diagnosisData.lower_left.five,
                six : diagnosisData.lower_left.six,
                seven : diagnosisData.lower_left.seven,
                eight : diagnosisData.lower_left.eight 
            },

            lower_right : {
                one : diagnosisData.lower_right.one,
                two : diagnosisData.lower_right.two,
                three : diagnosisData.lower_right.three,
                four : diagnosisData.lower_right.four,
                five : diagnosisData.lower_right.five,
                six : diagnosisData.lower_right.six,
                seven : diagnosisData.lower_right.seven,
                eight : diagnosisData.lower_right.eight 
            },
            BDR : {
                one : diagnosisData.BDR.one,
                two : diagnosisData.BDR.two,
                three : diagnosisData.BDR.three,
                four : diagnosisData.BDR.four,
                five : diagnosisData.BDR.five,
                six : diagnosisData.BDR.six,
                seven : diagnosisData.BDR.seven,
                eight : diagnosisData.BDR.eight,
                nine : diagnosisData.BDR.nine,
                U : diagnosisData.BDR.u,
                first_L : diagnosisData.BDR.first_L,
                second_L : diagnosisData.BDR.second_L,
                R : diagnosisData.BDR.r
            },
            BDC : {
                one : diagnosisData.BDC.one,
                two : diagnosisData.BDC.two,
                three : diagnosisData.BDC.three,
                four : diagnosisData.BDC.four,
                five : diagnosisData.BDC.five,
                six : diagnosisData.BDC.six,
                seven : diagnosisData.BDC.seven,
                eight : diagnosisData.BDC.eight,
                nine : diagnosisData.BDC.nine,
                U : diagnosisData.BDC.u,
                first_L : diagnosisData.BDC.first_L,
                second_L : diagnosisData.BDC.second_L,
                R : diagnosisData.BDC.r
            },
            AfterBDR : {
                attrition : diagnosisData.AfterBDR.attrition,
                abration : diagnosisData.AfterBDR.abration,
                irrotion : diagnosisData.AfterBDR.irrotion
            },
            pic : medicineData.pic,
            preview : previewData.preview
        };
        axios({
            url : 'http://localhost:5000/save',
            method : 'POST',
            data : payload
        }).then((res) =>{
            alert(res.data.msg);
        }).catch((res) =>{
            alert(res.data.msg);
        });
        setSubmit(true)
        
    }

    const handleNewPatient = (e) =>{
        setInfoShow(true)
        setErr(false)
    }

    const handleUpdate = (e) =>{
        setDataShow(false)
        setCostUpdateBtn(true)
    }

    const handleCostUpdate = async (e) =>{
        e.preventDefault();
        const updateData = {
            due : values.due,
            nextVisit : values.nextVisit
        };
        axios({
            url : `http://localhost:5000/update/${data._id}`,
            method : 'PATCH',
            data : updateData
        }).then((res) =>{
            alert(res.data.msg)
        }).catch((err) =>{
            alert(err.message)
        });

    }


    const   generatePdf =()=>{        
        var doc = new jsPDF('p', 'pt');
        
        doc.setFontSize(18)
        doc.setFont('helvetica', 'bold');
        
        doc.text('Oro Fresh Dental Care', 200,30).setFontSize(13).setFont('helvetica', 'bold');
        doc.text('Your Perfect Smile Partner', 212,48).setFontSize(13).setFont('helvetica', 'normal');
        doc.text('68, Mohakhali Community Center Market, Shop - 5 & 16', 140,66);
        doc.text("Gulshan, Dhaka - 1212 || Cell : 01715 243393", 165,84);

        doc.setFont('helvetica', 'italic');
        doc.text(50, 118,`Name : ${infoData.name}`);
        doc.text(50, 136, `Age : ${infoData.age}`);
        doc.text(370, 136, `Contact : ${infoData.contact}`);
        doc.text(50, 154, `Height : ${infoData.height} cm`);
        doc.text(370, 154, `Weight : ${infoData.weight} kg`);
        doc.text(50, 172, `Blood Pressure : Systol ${infoData.systol}`);
        doc.text(370, 172, `Diastol : ${infoData.diastol}`);
        doc.text(50, 190, `Pulse : ${infoData.pulse}`);
        doc.text(370, 190, `Glucose : ${infoData.glucose}`);
        doc.text(50, 208, `Temperature : ${infoData.temperature} C`);
        doc.text(370, 208, `Oxygen Saturation : ${infoData.oxygen}`);


        doc.setFont('helvetica', 'bold');
        doc.text('Medical History', 235, 240).setFontSize(13).setFont('helvetica','bold');
        jsTable(doc, {
            startY : 250,
            head : [['Diabetics', 'Heart Diseases', 'Hepatities', 'Kidney Diseases', 'Drug Reaction']],
            body : [[`${diagnosisData.medicalHistory.isDiabetics ? "Yes" : "-"}`, ` ${diagnosisData.medicalHistory.isHeartDiseases ? "Yes" : "-"}`, `${diagnosisData.medicalHistory.isHepatities ? "Yes" : "-"}`,
            `${diagnosisData.medicalHistory.isKidneyDiseases ? "Yes" : "-"}`, `${diagnosisData.medicalHistory.isDrugReaction ? "Yes" : "-"}`]]
        })
        
        
        doc.text('Problem', 255, 330);
        jsTable(doc, {
            startY : 340,
            head : [['Calculass, Plaque, Stain, Stone','Gum Bleeding','Foul Odor']],
            body : [[`${diagnosisData.problem.calculass ? "Yes" : "-"}`, `${diagnosisData.problem.gumBleeding ? "Yes" : "-"}`, `${diagnosisData.problem.odor ? "Yes" : "-"}`]]
        })


        doc.text('Treatment', 255, 420);
        jsTable(doc, {
            startY : 430,
            head : [['Resoration', 'Conservetives', 'Endodontics', 'Prosthodontics', 'Orthodontics']],
            body : [[`${diagnosisData.treatment.resoration ? "Yes" : "-"}`, `${diagnosisData.treatment.conservetives ? "Yes" : "-"}`, `${diagnosisData.treatment.indodontics ? "Yes" : "-"}`,
                `${diagnosisData.treatment.prosthodontics ? "Yes" : "-"}`, `${diagnosisData.treatment.orthodontics ? "Yes" : "-"}`]]
        })

        jsTable(doc, {
            head : [['Surgery', 'Periodontics', 'Prevention', 'Medication','Asthetics']],
            body : [[`${diagnosisData.treatment.surgery ? "Yes" : "-"}`, `${diagnosisData.treatment.periodontics ? "Yes" : "-"}`, `${diagnosisData.treatment.prevention ? "Yes" : "-"}`,
             `${diagnosisData.treatment.medication ? "Yes" : "-"}`, `${diagnosisData.treatment.asthetics ? "Yes" : "-"}`]]
        })
    
        doc.setFont('helvetica', 'italic');

        doc.text(70, 580, `Past Case History : ${diagnosisData.pastCaseOption}`);
        doc.text(350, 580, `Radiological History : ${diagnosisData.radiologicalHistory}`);

        
        doc.setFont('helvetica', 'bold');
        doc.text('Pain On', 255, 630);
        jsTable(doc, {
            startY : 640,
            head : [['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight','Nine', 'Ten','Eleven']],
            body : [[`${diagnosisData.painOn.one ? "Yes" : "-"}`, `${diagnosisData.painOn.two ? "Yes" : "-"}`, `${diagnosisData.painOn.three ? "Yes" : "-"}`, `${diagnosisData.painOn.four ? "Yes" : "-"}`, `${diagnosisData.painOn.five ? "Yes" : "-"}`,
            `${diagnosisData.painOn.six ? "Yes" : "-"}`, `${diagnosisData.painOn.seven ? "Yes" : "-"}`, `${diagnosisData.painOn.eight ? "Yes" : "-"}`, `${diagnosisData.painOn.nine ? "Yes" : "-" }`, `${diagnosisData.painOn.ten ? "Yes" : "-"}`, `${diagnosisData.painOn.eleven ? "Yes" : "-"}`]]

        })

        doc.addPage();
        
        jsTable(doc, {
            head : [['Position', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight']],
            body : [
                ['Upper Left', `${diagnosisData.upper_left.one ? "Yes" : "-"}`, `${diagnosisData.upper_left.two ? "Yes" : "-"}`, `${diagnosisData.upper_left.three ? "Yes" : "-"}`,
                `${diagnosisData.upper_left.four ? "Yes" : "-"}`, `${diagnosisData.upper_left.five ? "Yes" : "-"}`, `${diagnosisData.upper_left.six ? "Yes" : "-"}`, `${diagnosisData.upper_left.seven ? "Yes" : "-"}`,
                `${diagnosisData.upper_left.eight ? "Yes" : "-"}` ],


                ['Upper Right', `${diagnosisData.upper_right.one ? "Yes" : "-"}`, `${diagnosisData.upper_right.two ? "Yes" : "-"}`, `${diagnosisData.upper_right.three ? "Yes" : "-"}`,
                `${diagnosisData.upper_right.four ? "Yes" : "-"}`, `${diagnosisData.upper_right.five ? "Yes" : "-"}`, `${diagnosisData.upper_right.six ? "Yes" : "-"}`, `${diagnosisData.upper_right.seven ? "Yes" : "-"}`,
                `${diagnosisData.upper_right.eight ? "Yes" : "-"}` ],

                ['Lower Left', `${diagnosisData.lower_left.one ? "Yes" : "-"}`, `${diagnosisData.lower_left.two ? "Yes" : "-"}`, `${diagnosisData.lower_left.three ? "Yes" : "-"}`,
                `${diagnosisData.lower_left.four ? "Yes" : "-"}`, `${diagnosisData.lower_left.five ? "Yes" : "-"}`, `${diagnosisData.lower_left.six ? "Yes" : "-"}`, `${diagnosisData.lower_left.seven ? "Yes" : "-"}`,
                `${diagnosisData.lower_left.eight ? "Yes" : "-"}` ],

                ['Lower Right', `${diagnosisData.lower_right.one ? "Yes" : "-"}`, `${diagnosisData.lower_right.two ? "Yes" : "-"}`, `${diagnosisData.lower_right.three ? "Yes" : "-"}`,
                `${diagnosisData.lower_right.four ? "Yes" : "-"}`, `${diagnosisData.lower_right.five ? "Yes" : "-"}`, `${diagnosisData.lower_right.six ? "Yes" : "-"}`, `${diagnosisData.lower_right.seven ? "Yes" : "-"}`,
                `${diagnosisData.lower_right.eight ? "Yes" : "-"}` ]
            ]
        })

    
        

        jsTable(doc, {
            head : [['Name', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'U', 'L', 'L', 'R']],
            body : [['BDR', `${diagnosisData.BDR.one ? "Yes" : "-"}`,`${diagnosisData.BDR.two ? "Yes" : "-"}`, `${diagnosisData.BDR.three ? "Yes" : "-"}`, `${diagnosisData.BDR.four ? "Yes" : "-"}`,
            `${diagnosisData.BDR.five ? "Yes" : "-"}`, `${diagnosisData.BDR.six ? "Yes" : "-"}`, `${diagnosisData.BDR.seven ? "Yes" : "-"}`, `${diagnosisData.BDR.eight ? "Yes" : "-"}`, `${diagnosisData.BDR.nine ? "Yes" : "-"}`,
            `${diagnosisData.BDR.u ? "Yes" : "-"}`, `${diagnosisData.BDR.first_L ? "Yes" : "-"}`,`${diagnosisData.BDR.second_L ? "Yes" : "-"}`,`${diagnosisData.BDR.r ? "Yes" : "-"}`],
            
            ['BDC', `${diagnosisData.BDC.one ? "Yes" : "-"}`,`${diagnosisData.BDC.two ? "Yes" : "-"}`, `${diagnosisData.BDC.three ? "Yes" : "-"}`, `${diagnosisData.BDC.four ? "Yes" : "-"}`,
            `${diagnosisData.BDC.five ? "Yes" : "-"}`, `${diagnosisData.BDC.six ? "Yes" : "-"}`, `${diagnosisData.BDC.seven ? "Yes" : "-"}`, `${diagnosisData.BDC.eight ? "Yes" : "-"}`, `${diagnosisData.BDC.nine ? "Yes" : "-"}`,
            `${diagnosisData.BDC.u ? "Yes" : "-"}`, `${diagnosisData.BDC.first_L ? "Yes" : "-"}`,`${diagnosisData.BDC.second_L ? "Yes" : "-"}`,`${diagnosisData.BDC.r ? "Yes" : "-"}`],
            
        ]
        })

        doc.setFont('helvetica', 'italic');
        doc.text("Attrition : ", 55, 255);
       
        doc.text(`${diagnosisData.AfterBDR.attrition ? "Yes" : "No"}`, 118, 255);
        
        doc.text("Abration : ", 220, 255);
        
        doc.text(`${diagnosisData.AfterBDR.abration ? "Yes" : "No"}`,285, 255);
        
        doc.text("Irrotion : ", 390, 255);
        
        doc.text(`${diagnosisData.AfterBDR.irrotion ? "Yes" : "No"}`,450, 255);
        
        doc.setFont('helvetica','bold');
        doc.text('Payment & Visit', 235, 300);
        doc.setFont('helvetica','italic');
        doc.text("Total : ",170, 325);
        doc.setFont('helvetica', 'italic');
        doc.text(`${costData.total}`, 215, 325);
        doc.text(" tk", 250, 325);
         
        doc.setFont('helvetica','italic');
        doc.text("Due : ", 170, 343);
        doc.setFont('helvetica', 'italic');
        doc.text(`${costData.due}`, 205, 343)
        doc.text("tk", 240, 343)
        
        doc.setFont('helvetica','italic');
        doc.text("Date of Appointment : ", 170, 361);
        doc.setFont('helvetica', 'normal');
        doc.text(`${costData.dateOfAppointment}`, 315, 361);

        doc.setFont('helvetica','italic');
        doc.text("Next Visit : ", 170, 379);
        doc.setFont('helvetica', 'normal');
        doc.text(`${costData.nextVisit}`, 250, 379);

        doc.setFont('helvetica','bold');
        doc.setDrawColor(0, 0, 0);
        doc.line(430,470,520,470);

        doc.text("Signature", 445, 495)
        
        var dt = new Date();
        
        doc.setFont('helvetica','normal');
        doc.setFontSize(10);
        doc.text("Generated : ", 120, 530);
        doc.text(`${dt}`, 180, 530);
        doc.save('patient.pdf');
    }

    return (
    <div>
        
        <div className = "patientInfoNav">
            <div className="patient_nav_header">
                <h3>Information</h3>
                <h3>Diagnosis</h3>
                <h3>Medicine</h3>
                <h3>Cost</h3>
                <h3>Preview</h3>
                
            </div>
            <Link to = "/showAppointments"><button id ="patientInfo_btn">View Appointment</button></Link>
            
            <form onSubmit = {handleSearch}>
                <div className = "search-container">
                    <input type = "Number" name = "cont" placeholder="Contact No" id="patientInfo_contact" value={value} onChange ={(e) => setValue(e.target.value)}/>
                    <button type="submit" className = "patientInfo_submit_btn"><img id="search_image" src = "../images/search.png" alt = "Search"/></button>
                </div>
                
            </form>

            
            
        </div>
        {isLoading ? <div>Loading.....</div>:null}
        {infoShow ? <PatientInfo onSubmit = {getInfoData}/> : null}
        {diagnosisShow ? <DemoDiagnosis onSubmit = {getDiagnosisData}/> : null}
        {medicineShow ? <PatientMedicine onSubmit = {getMedicineData}/> : null}
        {costShow ? <PatientCost onSubmit = {getCostData}/> : null}
        {previewShow ? <PatientPreview onSubmit = {getPreviewData}/> : null}
        {allData ? <AllData {...infoData}/> : null} {/* patient info data */}
        {allData ? <DiagnosisData {...diagnosisData}/> : null}
        {allData ? <CostData {...costData}/> : null}
        {allData ? <PreviewData {...previewData}/> : null}
        {allData ? <div className = "centerBtn"><button onClick = {handleSave}>Save Data</button></div>: null}
        {isSubmit ? <div className = "centerBtn"><button onClick = {generatePdf}>Generate PDF</button></div>: null}
        {isDataShow ? <SearchData {...data}/> : null}
        {isErr ? <div>
                <h1>Data not Found</h1>
                <div className='centerBtn'><button onClick={handleNewPatient}>New Patient</button></div>
             </div>:null}
        
        {isDataShow ? <div className = "centerBtn"><button onClick = {handleUpdate}>Update</button></div>: null}
        {costUpdateBtn ? <div className='centerBtn'>
            <form>
                <div className = "name_age">
                    
                    <div><label>Due</label><br/><input type = 'number' name = "due" value = {values.due} onChange={handleInputChange}/></div>
                    <div><label>Next Visit</label><br/><input type = 'date' name = "nextVisit" value = {values.nextVisit} onChange={handleInputChange}/></div>
                </div>
            </form>
            <button onClick={handleCostUpdate}>Save</button>
            
            </div> : null}
    </div>
  )
}
