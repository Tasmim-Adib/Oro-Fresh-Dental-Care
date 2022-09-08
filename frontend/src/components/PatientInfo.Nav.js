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

export default function PatientInfoNav() {

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



    const handleSearch = async (e) =>{
        e.preventDefault();
        return await axios
        .get(`http://localhost:5000/patients?contact=${value}`)
        .then((response) => {
            setData(response.data);
            setValue("");
            setDataShow(true)
            setInfoShow(false)
            setSubmit(false)            
        })
        .catch((err) => console.log(err.message));
         
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


    const   generatePdf =()=>{        
        var doc = new jsPDF('p', 'pt');
        
        doc.setFontSize(18)
        doc.setFont('helvetica', 'bold');
        
        doc.text('Oro Fresh Dental Care', 200,30).setFontSize(13).setFont('helvetica', 'bold');
        doc.text('Your Perfect Smile Partner', 218,48).setFontSize(13).setFont('helvetica', 'normal');
        doc.text('68, Mohakhali Community Center Market, Shop - 5 & 16', 140,66);
        doc.text("Gulshan, Dhaka - 1212 || Cell : 01715 243393", 165,84);

        doc.setFont('helvetica', 'bold');
        doc.text(50, 118,`Name : ${this.state.name}`);
        doc.text(50, 136, `Age : ${this.state.age}`);
        doc.text(200, 136, `Sex : ${this.state.sex}`);
        doc.text(370, 136, `Contact : ${this.state.contact}`);
        doc.text(50, 154, `Reference : ${this.state.reference}`);
        doc.text(50, 172, `Area : ${this.state.area}`);


        doc.text('Medical History', 235, 203).setFontSize(13).setFont('helvetica','bold');
        jsTable(doc, {
            startY : 218,
            head : [['Diabetics', 'Heart Diseases', 'Hepatities', 'Kidney Diseases', 'Drug Reaction']],
            body : [[`${this.state.medicalHistory.isDiabetics ? "Yes" : "-"}`, ` ${this.state.medicalHistory.isHeartDiseases ? "Yes" : "-"}`, `${this.state.medicalHistory.isHepatities ? "Yes" : "-"}`,
            `${this.state.medicalHistory.isKidneyDiseases ? "Yes" : "-"}`, `${this.state.medicalHistory.isDrugReaction ? "Yes" : "-"}`]]
        })
        
        
        doc.text('Problem', 255, 298);
        jsTable(doc, {
            startY : 313,
            head : [['Calculass, Plaque, Stain, Stone','Gum Bleeding','Foul Odor']],
            body : [[`${this.state.problem.calculass ? "Yes" : "-"}`, `${this.state.problem.gumBleeding ? "Yes" : "-"}`, `${this.state.problem.odor ? "Yes" : "-"}`]]
        })


        doc.text('Treatment', 255, 393);
        jsTable(doc, {
            startY : 408,
            head : [['Resoration', 'Conservetives', 'Endodontics', 'Prosthodontics', 'Orthodontics']],
            body : [[`${this.state.treatment.resoration ? "Yes" : "-"}`, `${this.state.treatment.conservetives ? "Yes" : "-"}`, `${this.state.treatment.indodontics ? "Yes" : "-"}`,
                `${this.state.treatment.prosthodontics ? "Yes" : "-"}`, `${this.state.treatment.orthodontics ? "Yes" : "-"}`]]
        })

        jsTable(doc, {
            head : [['Surgery', 'Periodontics', 'Prevention', 'Medication','Asthetics']],
            body : [[`${this.state.treatment.surgery ? "Yes" : "-"}`, `${this.state.treatment.periodontics ? "Yes" : "-"}`, `${this.state.treatment.prevention ? "Yes" : "-"}`,
             `${this.state.treatment.medication ? "Yes" : "-"}`, `${this.state.treatment.asthetics ? "Yes" : "-"}`]]
        })
    

        doc.text(70, 548, `Past Case History : ${this.state.pastCaseOption}`);
        doc.text(350, 548, `Radiological History : ${this.state.radiologicalHistory}`);
        
        
        doc.text('Pain On', 255, 588);
        jsTable(doc, {
            startY : 603,
            head : [['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight','Nine', 'Ten','Eleven']],
            body : [[`${this.state.painOn.one ? "Yes" : "-"}`, `${this.state.painOn.two ? "Yes" : "-"}`, `${this.state.painOn.three ? "Yes" : "-"}`, `${this.state.painOn.four ? "Yes" : "-"}`, `${this.state.painOn.five ? "Yes" : "-"}`,
            `${this.state.painOn.six ? "Yes" : "-"}`, `${this.state.painOn.seven ? "Yes" : "-"}`, `${this.state.painOn.eight ? "Yes" : "-"}`, `${this.state.painOn.nine ? "Yes" : "-" }`, `${this.state.painOn.ten ? "Yes" : "-"}`, `${this.state.painOn.eleven ? "Yes" : "-"}`]]

        })
        
        jsTable(doc, {
            startY : 663,
            head : [['Position', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight']],
            body : [
                ['Upper Left', `${this.state.upper_left.one ? "Yes" : "-"}`, `${this.state.upper_left.two ? "Yes" : "-"}`, `${this.state.upper_left.three ? "Yes" : "-"}`,
                `${this.state.upper_left.four ? "Yes" : "-"}`, `${this.state.upper_left.five ? "Yes" : "-"}`, `${this.state.upper_left.six ? "Yes" : "-"}`, `${this.state.upper_left.seven ? "Yes" : "-"}`,
                `${this.state.upper_left.eight ? "Yes" : "-"}` ],


                ['Upper Right', `${this.state.upper_right.one ? "Yes" : "-"}`, `${this.state.upper_right.two ? "Yes" : "-"}`, `${this.state.upper_right.three ? "Yes" : "-"}`,
                `${this.state.upper_right.four ? "Yes" : "-"}`, `${this.state.upper_right.five ? "Yes" : "-"}`, `${this.state.upper_right.six ? "Yes" : "-"}`, `${this.state.upper_right.seven ? "Yes" : "-"}`,
                `${this.state.upper_right.eight ? "Yes" : "-"}` ],

                ['Lower Left', `${this.state.lower_left.one ? "Yes" : "-"}`, `${this.state.lower_left.two ? "Yes" : "-"}`, `${this.state.lower_left.three ? "Yes" : "-"}`,
                `${this.state.lower_left.four ? "Yes" : "-"}`, `${this.state.lower_left.five ? "Yes" : "-"}`, `${this.state.lower_left.six ? "Yes" : "-"}`, `${this.state.lower_left.seven ? "Yes" : "-"}`,
                `${this.state.lower_left.eight ? "Yes" : "-"}` ],

                ['Lower Right', `${this.state.lower_right.one ? "Yes" : "-"}`, `${this.state.lower_right.two ? "Yes" : "-"}`, `${this.state.lower_right.three ? "Yes" : "-"}`,
                `${this.state.lower_right.four ? "Yes" : "-"}`, `${this.state.lower_right.five ? "Yes" : "-"}`, `${this.state.lower_right.six ? "Yes" : "-"}`, `${this.state.lower_right.seven ? "Yes" : "-"}`,
                `${this.state.lower_right.eight ? "Yes" : "-"}` ]
            ]
        })

    
        doc.addPage();

        jsTable(doc, {
            head : [['Name', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'U', 'L', 'L', 'R']],
            body : [['BDR', `${this.state.BDR.one ? "Yes" : "-"}`,`${this.state.BDR.two ? "Yes" : "-"}`, `${this.state.BDR.three ? "Yes" : "-"}`, `${this.state.BDR.four ? "Yes" : "-"}`,
            `${this.state.BDR.five ? "Yes" : "-"}`, `${this.state.BDR.six ? "Yes" : "-"}`, `${this.state.BDR.seven ? "Yes" : "-"}`, `${this.state.BDR.eight ? "Yes" : "-"}`, `${this.state.BDR.nine ? "Yes" : "-"}`,
            `${this.state.BDR.u ? "Yes" : "-"}`, `${this.state.BDR.first_L ? "Yes" : "-"}`,`${this.state.BDR.second_L ? "Yes" : "-"}`,`${this.state.BDR.r ? "Yes" : "-"}`],
            
            ['BDC', `${this.state.BDC.one ? "Yes" : "-"}`,`${this.state.BDC.two ? "Yes" : "-"}`, `${this.state.BDC.three ? "Yes" : "-"}`, `${this.state.BDC.four ? "Yes" : "-"}`,
            `${this.state.BDC.five ? "Yes" : "-"}`, `${this.state.BDC.six ? "Yes" : "-"}`, `${this.state.BDC.seven ? "Yes" : "-"}`, `${this.state.BDC.eight ? "Yes" : "-"}`, `${this.state.BDC.nine ? "Yes" : "-"}`,
            `${this.state.BDC.u ? "Yes" : "-"}`, `${this.state.BDC.first_L ? "Yes" : "-"}`,`${this.state.BDC.second_L ? "Yes" : "-"}`,`${this.state.BDC.r ? "Yes" : "-"}`],
            
        ]
        })

        doc.text("Attrition : ", 55, 170);
        doc.setFont('helvetica', 'normal');
        doc.text(`${this.state.AfterBDR.attrition ? "Yes" : "No"}`, 118, 170);
        doc.setFont('helvetica', 'bold');
        doc.text("Abration : ", 220, 170);
        doc.setFont('helvetica', 'normal');
        doc.text(`${this.state.AfterBDR.abration ? "Yes" : "No"}`,285, 170);
        doc.setFont('helvetica','bold');
        doc.text("Irrotion : ", 390, 170);
        doc.setFont('helvetica', 'normal');
        doc.text(`${this.state.AfterBDR.irrotion ? "Yes" : "No"}`,450, 170);
        
        doc.setFont('helvetica','bold');
        doc.text('Payment & Visit', 235, 230);
        doc.setFont('helvetica','bold');
        doc.text("Total : ",170, 255);
        doc.setFont('helvetica', 'normal');
        doc.text(`${this.state.total}`, 215, 255);
        doc.text(" tk", 250, 255);
         
        doc.setFont('helvetica','bold');
        doc.text("Due : ", 170, 273);
        doc.setFont('helvetica', 'normal');
        doc.text(`${this.state.due}`, 205, 273)
        doc.text("tk", 240, 273)
        
        doc.setFont('helvetica','bold');
        doc.text("Date of Appointment : ", 170, 291);
        doc.setFont('helvetica', 'normal');
        doc.text(`${this.state.dateOfAppointment}`, 315, 291);

        doc.setFont('helvetica','bold');
        doc.text("Next Visit : ", 170, 309);
        doc.setFont('helvetica', 'normal');
        doc.text(`${this.state.nextVisit}`, 250, 309);

        doc.setFont('helvetica','bold');
        doc.setDrawColor(0, 0, 0);
        doc.line(430,430,520,430);

        doc.text("Signature", 445, 445)
        
        var dt = new Date();
        
        doc.setFont('helvetica','normal');
        doc.setFontSize(10);
        doc.text("Generated : ", 120, 480);
        doc.text(`${dt}`, 180, 480);
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

    </div>
  )
}
