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

export default function PatientInfoNav() {

    const [value, setValue] = useState("")
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
            
        })
        .catch((err) => console.log(err.message));
         
    }

    const handleButton = (e) =>{
        if(infoShow){
            
        }
        else if(diagnosisShow){
            setDiagnosisShow(false)
            setMedicineShow(true)
        }
        else if(medicineShow){
            setMedicineShow(false)
            setCostShow(true)
        }
        else if(costShow){
            setCostShow(false)
            setPreviewShow(true)
            setSubmit(true)
        }
        else if(previewShow){
            setPreviewShow(false)
            
        }

    }

    const handleSave = (e) =>{
        
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
        {/* {isSubmit ? <div className = "centerBtn"><button onClick = {handleSave}>Save</button></div>   : <div className = "centerBtn"><button onClick = {handleButton}>Next</button></div>} */}
        {allData ? <AllData {...infoData}/> : null} {/* patient info data */}
        {allData ? <DiagnosisData {...diagnosisData}/> : null}
        {allData ? <CostData {...costData}/> : null}
        {allData ? <PreviewData {...previewData}/> : null}

    </div>
  )
}
