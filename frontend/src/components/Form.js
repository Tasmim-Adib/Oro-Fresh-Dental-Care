import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import '../css/formStyle.css'
import axios from 'axios';
import jsPDF from 'jspdf';
import jsTable from 'jspdf-autotable'

class Form extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name : '',
            age : '',
            sex : "Male",
            contact : '',
            area : '',
            reference : '',
            total : '',
            due : '',
            nextVisit : '',
            dateOfAppointment : '',
            medicalHistory : {
                isDiabetics : false,
                isHeartDiseases : false,
                isHepatities : false,
                isKidneyDiseases : false,
                isDrugReaction : false
            },
            treatment : {
                resoration : false,
                conservetives : false,
                indodontics : false,
                prosthodontics : false,
                orthodontics : false,
                surgery : false,
                periodontics : false,
                prevention : false,
                medication : false,
                asthetics : false
            },
            
            problem : {
                odor : false,
                gumBleeding: false,
                calculass : false
            },
            pastCaseOption : "N",
            radiologicalHistory : "N",
            painOn : {
                one : false,
                two : false,
                three : false,
                four : false,
                five : false,
                six : false,
                seven : false,
                eight : false,
                nine : false,
                ten : false,
                eleven : false
            },

            upper_left : {
                one : false,
                two : false,
                three : false,
                four : false,
                five : false,
                six : false,
                seven : false,
                eight : false
            },

            upper_right : {
                one : false,
                two : false,
                three : false,
                four : false,
                five : false,
                six : false,
                seven : false,
                eight : false
            },

            lower_left : {
                one : false,
                two : false,
                three : false,
                four : false,
                five : false,
                six : false,
                seven : false,
                eight : false
            }, 

            lower_right : {
                one : false,
                two : false,
                three : false,
                four : false,
                five : false,
                six : false,
                seven : false,
                eight : false,
            },
            BDR : {
                one : false,
                two : false,
                three : false,
                four : false,
                five : false,
                six : false,
                seven : false,
                eight : false,
                nine : false,
                u : false,
                first_L : false,
                second_L : false,
                r : false
            },
            BDC : {
                one : false,
                two : false,
                three : false,
                four : false,
                five : false,
                six : false,
                seven : false,
                eight : false,
                nine : false,
                u : false,
                first_L : false,
                second_L : false,
                r : false
            },
            AfterBDR : {
                attrition : false,
                abration : false,
                irrotion : false
            },

            isShow : false,
            pic : '',
            loading : false
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        
    }
    handleFieldChange(event) {
        this.setState({
            [event.target.name] : event.target.value
          })
      }
    

    handleSelectChange = (ev) =>{
        this.setState({
            sex : ev.target.value
        })
    }
    handleInputChange = (ev) => {
        let state = this.state;
        state.medicalHistory[ev.target.value] = ev.target.checked;
        this.setState(state);
    }

    onValueChangePast = (event) => {
        
        this.setState({
          pastCaseOption: event.target.value
        });
    }

    onValueChange = (eve) =>{
        this.setState({
            radiologicalHistory : eve.target.value
        });
    }

    handlePain = (ev) => {
        let state = this.state;
        state.painOn[ev.target.value] = ev.target.checked;
        this.setState(state);
    }
    handleBDR = (ev) => {
        let state = this.state;
        state.BDR[ev.target.value] = ev.target.checked;
        this.setState(state);
    }
    handleAfterBDR = (ev) => {
        let state = this.state;
        state.AfterBDR[ev.target.value] = ev.target.checked;
        this.setState(state);
    }
    handleBDC = (ev) => {
        let state = this.state;
        state.BDC[ev.target.value] = ev.target.checked;
        this.setState(state);
    }

    handleUpperLeftChange = (ev) =>{
        let state = this.state;
        state.upper_left[ev.target.value] = ev.target.checked;
        this.setState(state);
    }
    handleUpperRightChange = (ev) =>{
        let state = this.state;
        state.upper_right[ev.target.value] = ev.target.checked;
        this.setState(state);
    }
    handleLowerLeftChange = (ev) =>{
        let state = this.state;
        state.lower_left[ev.target.value] = ev.target.checked;
        this.setState(state);
    }
    handleLowerRightChange = (ev) =>{
        let state = this.state;
        state.lower_right[ev.target.value] = ev.target.checked;
        this.setState(state);
    }
    handleProblemChange =(ev) =>{
        let state = this.state;
        state.problem[ev.target.value] = ev.target.checked;
        this.setState(state);
    }

    handleTreatmentChange = (ev) =>{
        let state = this.state;
        state.treatment[ev.target.value] = ev.target.checked;
        this.setState(state);
    }

    handleFileChange = async(e) =>{
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset','OroFreshDentalCare')

        this.setState({
            loading : true
        })
        const res = await fetch("https://api.cloudinary.com/v1_1/ds4o8gl3d/image/upload",{
            method : 'POST',
            body : data
        })

        const file = await res.json();
        
        this.setState({
            loading : false,
            pic : file.secure_url
        })
    }

    submit = (event) =>{
        event.preventDefault();        
        const payload = {
            name : this.state.name,
            age : this.state.age,
            sex : this.state.sex,
            contact : this.state.contact,
            area : this.state.area,
            reference : this.state.reference,
            totalCost : this.state.total,
            due : this.state.due,
            nextVisit : this.state.nextVisit,
            appointment : this.state.dateOfAppointment,
            medicalHistory : {
                isDiabetics : this.state.medicalHistory.isDiabetics,
                isHeartDiseases : this.state.medicalHistory.isHeartDiseases,
                isHepatities : this.state.medicalHistory.isHepatities,
                isKidneyDiseases : this.state.medicalHistory.isKidneyDiseases,
                isDrugReaction : this.state.medicalHistory.isDrugReaction
            },
            treatment : {
                resoration : this.state.treatment.resoration,
                conservetives : this.state.treatment.conservetives,
                indodontics : this.state.treatment.indodontics,
                prosthodontics : this.state.treatment.prosthodontics,
                orthodontics : this.state.treatment.orthodontics,
                surgery : this.state.treatment.surgery,
                periodontics : this.state.treatment.periodontics,
                prevention : this.state.treatment.prevention,
                medication : this.state.treatment.medication,
                asthetics : this.state.treatment.asthetics
            },
            
            problem : {
                odor : this.state.problem.odor,
                gumBleeding: this.state.problem.gumBleeding,
                calculass : this.state.problem.calculass
            },
            
            pastCaseOption : this.state.pastCaseOption,
            radiologicalHistory : this.state.radiologicalHistory,
            painOn : {
                one : this.state.painOn.one,
                two : this.state.painOn.two,
                three : this.state.painOn.three,
                four : this.state.painOn.four,
                five : this.state.painOn.five,
                six : this.state.painOn.six,
                seven : this.state.painOn.seven,
                eight : this.state.painOn.eight,
                nine : this.state.painOn.nine,
                ten : this.state.painOn.ten,
                eleven : this.state.painOn.eleven
            },

            upper_left : {
                one : this.state.upper_left.one,
                two : this.state.upper_left.two,
                three : this.state.upper_left.three,
                four : this.state.upper_left.four,
                five : this.state.upper_left.five,
                six : this.state.upper_left.six,
                seven : this.state.upper_left.seven,
                eight : this.state.upper_left.eight
            },
            upper_right : {
                one : this.state.upper_right.one,
                two : this.state.upper_right.two,
                three : this.state.upper_right.three,
                four : this.state.upper_right.four,
                five : this.state.upper_right.five,
                six : this.state.upper_right.six,
                seven : this.state.upper_right.seven,
                eight : this.state.upper_right.eight   
            },

            lower_left : {
                one : this.state.lower_left.one,
                two : this.state.lower_left.two,
                three : this.state.lower_left.three,
                four : this.state.lower_left.four,
                five : this.state.lower_left.five,
                six : this.state.lower_left.six,
                seven : this.state.lower_left.seven,
                eight : this.state.lower_left.eight 
            },

            lower_right : {
                one : this.state.lower_right.one,
                two : this.state.lower_right.two,
                three : this.state.lower_right.three,
                four : this.state.lower_right.four,
                five : this.state.lower_right.five,
                six : this.state.lower_right.six,
                seven : this.state.lower_right.seven,
                eight : this.state.lower_right.eight 
            },
            BDR : {
                one : this.state.BDR.one,
                two : this.state.BDR.two,
                three : this.state.BDR.three,
                four : this.state.BDR.four,
                five : this.state.BDR.five,
                six : this.state.BDR.six,
                seven : this.state.BDR.seven,
                eight : this.state.BDR.eight,
                nine : this.state.BDR.nine,
                U : this.state.BDR.u,
                first_L : this.state.BDR.first_L,
                second_L : this.state.BDR.second_L,
                R : this.state.BDR.r
            },
            BDC : {
                one : this.state.BDC.one,
                two : this.state.BDC.two,
                three : this.state.BDC.three,
                four : this.state.BDC.four,
                five : this.state.BDC.five,
                six : this.state.BDC.six,
                seven : this.state.BDC.seven,
                eight : this.state.BDC.eight,
                nine : this.state.BDC.nine,
                U : this.state.BDC.u,
                first_L : this.state.BDC.first_L,
                second_L : this.state.BDC.second_L,
                R : this.state.BDC.r
            },
            AfterBDR : {
                attrition : this.state.AfterBDR.attrition,
                abration : this.state.AfterBDR.abration,
                irrotion : this.state.AfterBDR.irrotion
            },
            pic : this.state.pic
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
    };

    postDetails = (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('contact' , this.state.contact);
        //formData.append('presImage', this.state.fileName);        
        axios({
            url : 'http://localhost:5000/upload',
            method : 'POST',
            data : formData
        }).then((response) =>{
            console.log(response.data.msg);
        }).catch(() =>{
            console.log('Internal Error !!!');
        });
    }

    generatePdf =()=>{        
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
      render() {
        return (
            <div>
                <form onSubmit = {this.submit}>
                <div className="form_content">
                    <div className="patient_info">
                        <p className="patient_p">Patient's Information</p>
                        
                        <div className="name_age">
                            <div><label>Name</label> <br/><input type = 'text' name = "name" value = {this.state.name} onChange={this.handleFieldChange} required/></div>
                            <div><label>Contact No</label><br/><input type = 'text' name = "contact" value = {this.state.contact} onChange={this.handleFieldChange} required/></div>
                            
                        </div>
                        <div className="sex_age_ref">

                            <div><label>Sex</label><br/>
                                <select value={this.state.sex} onChange={this.handleSelectChange}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>     
                                </select>
                            </div>
                            <div><label>Age</label><br/><input type = 'number' name = "age" value = {this.state.age} onChange={this.handleFieldChange}/></div>
                            <div><label>Reference</label><br/><input type = 'text' name = "reference" value = {this.state.reference} onChange={this.handleFieldChange}/></div>
                        </div>
                        
                       
                        <div className="area">
                            <label>Area/Region</label><br/><input type = 'text' name = "area" value = {this.state.area} onChange={this.handleFieldChange}/>
                        </div>
                        
                    </div>
                    
                    <div className="medical_history">
                        <p className="patient_p">Medical History</p>
                       
                       <div className="medical_history_content">

                            <div><label>Diabetics: </label><input  name="medicalHistory" type="checkbox" value ="isDiabetics" onChange={this.handleInputChange} checked={this.state.medicalHistory.isDiabetics} /></div>
                            <div><label>Heart Diseases: </label><input  name="medicalHistory" type="checkbox" value ="isHeartDiseases"  onChange={this.handleInputChange} checked={this.state.medicalHistory.isHeartDiseases}/></div>
                            <div><label>Kidney Diseases: </label><input  name="medicalHistory"  type="checkbox" value ="isKidneyDiseases"  onChange={this.handleInputChange} checked={this.state.medicalHistory.isKidneyDiseases}/></div>
                            <div><label>Hepatities: </label><input  name="medicalHistory"  type="checkbox" value ="isHepatities" onChange={this.handleInputChange} checked={this.state.medicalHistory.isHepatities}/></div>
                            <div><label>Drug Reaction: </label><input  name="medicalHistory"  type="checkbox" value ="isDrugReaction" onChange={this.handleInputChange} checked={this.state.medicalHistory.isDrugReaction}/></div>
                       </div>
                    </div>
                </div>
                <div className = "form_content">
                    <div className = "problem">
                        <p className="patient_p">Problem</p>
                        <div className = "medical_history_content">
                            <div><label>Calculass Palque, Stain, Stone : </label><input  name="problem" value = "calculass" type="checkbox" checked={this.state.calculass} onChange={this.handleProblemChange} /></div>
                            <div><label>Gum Bleeding: </label><input  name="problem" value = "gumBleeding" type="checkbox" checked={this.state.gumBleeding} onChange={this.handleProblemChange} /></div>
                            <div><label>Foul Odor: </label><input  name="problem" value = "odor" type="checkbox" checked={this.state.odor} onChange={this.handleProblemChange} /></div>
                        </div>
                    </div>
                     <div className="treatment">
                        <p className="patient_p">Treatment</p>
                       
                        <div className="medical_history_content">
                            <div><label>Resoration: </label><input  name="resoration" value = "resoration" type="checkbox" checked={this.state.treatment.resoration} onChange={this.handleTreatmentChange} /></div>
                            <div><label>Conservetives: </label><input  name="conservetives" value = "conservetives" type="checkbox" checked={this.state.treatment.conservetives} onChange={this.handleTreatmentChange} /></div>
                            <div><label>Endodontics: </label><input  name="indodontics" value = "indodontics"  type="checkbox" checked={this.state.treatment.indodontics} onChange={this.handleTreatmentChange} /></div>
                            <div><label>Prosthodontics: </label><input  name="prosthodontics" value = "prosthodontics" type="checkbox" checked={this.state.treatment.prosthodontics} onChange={this.handleTreatmentChange} /></div>
                            <div><label>Orthodontics: </label><input  name="orthodontics" value = "orthodontics" type="checkbox" checked={this.state.treatment.orthodontics} onChange={this.handleTreatmentChange} /></div>
                            <div><label>Surgery: </label><input  name="surgery" value = "surgery" type="checkbox" checked={this.state.treatment.surgery} onChange={this.handleTreatmentChange} /></div>
                            <div><label>Periodontics: </label><input  name="periodontics" value = "periodontics" type="checkbox" checked={this.state.treatment.periodontics} onChange={this.handleTreatmentChange} /></div>
                            <div><label>Prevention: </label><input  name="prevention" value = "prevention" type="checkbox" checked={this.state.treatment.prevention} onChange={this.handleTreatmentChange} /></div>
                            <div><label>Medication: </label><input  name="medication" value = "medication" type="checkbox" checked={this.state.treatment.medication} onChange={this.handleTreatmentChange} /></div>
                            <div><label>Asthetics: </label><input  name="asthetics" value = "asthetics" type="checkbox" checked={this.state.treatment.asthetics} onChange={this.handleTreatmentChange} /></div>
                       </div>
                    </div>
                </div>
                <div className = "complain">
                    <p className="patient_p">Complain</p>
                    <div className = "past_case">
                        <label>Past Case History : </label>
                        <label><input type="radio" value="Y" checked={this.state.pastCaseOption === "Y"} onChange={this.onValueChangePast}/> Y</label>
                            <label><input type="radio" value="N" checked={this.state.pastCaseOption === "N"} onChange={this.onValueChangePast}/>N</label>
                    </div>
                    <div className = "past_case">
                        <label>Radiological History : </label>
                        <label><input type="radio" value="Y" checked={this.state.radiologicalHistory === "Y"} onChange={this.onValueChange}/>Y</label>
                        <label><input type="radio" value="N" checked={this.state.radiologicalHistory === "N"} onChange={this.onValueChange}/>N</label>
                        <label><input type="radio" value="A" checked={this.state.radiologicalHistory === "A"} onChange={this.onValueChange}/>A</label>
                    </div>
                    <div className="painON_align">
                        <div className = "painOn">
                            <p>Pain On</p>
                            <div className = "painON_content">
                                <div className = "painON_checkbox">
                                    <div>1</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="one" checked = {this.state.painOn.one}/></div>
                                </div>
                                <div className = "painON_checkbox">
                                    <div>2</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="two" checked = {this.state.painOn.two}/></div>
                                </div>
                                <div className = "painON_checkbox">
                                    <div>3</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="three" checked = {this.state.painOn.three}/></div>
                                </div>

                                <div className = "painON_checkbox">
                                    <div>4</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="four" checked = {this.state.painOn.four}/></div>
                                </div>
                                <div className = "painON_checkbox">
                                    <div>5</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="five" checked = {this.state.painOn.five}/></div>
                                </div>
                                <div className = "painON_checkbox">
                                    <div>6</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="six" checked = {this.state.painOn.six}/></div>
                                </div>
                                <div className = "painON_checkbox">
                                    <div>7</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="seven" checked = {this.state.painOn.seven}/></div>
                                </div>
                                <div className = "painON_checkbox">
                                    <div>8</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="eight" checked = {this.state.painOn.eight}/></div>
                                </div>
                                <div className = "painON_checkbox">
                                    <div>9</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="nine" checked = {this.state.painOn.nine}/></div>
                                </div>
                                <div className = "painON_checkbox">
                                    <div>10</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="ten" checked = {this.state.painOn.ten}/></div>
                                </div>
                                <div className = "painON_checkbox">
                                    <div>11</div>
                                    <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                    <div><input onChange = {this.handlePain} type ="checkbox" name ="pain" value ="eleven" checked = {this.state.painOn.eleven}/></div>
                                </div>
                            </div>                        
                        </div>
                    </div>


                    <div>
                        <div className = "upper">
                            <div className="upper_left">
                                <p>Upper Left</p>
                                <div className = "painON_content">
                                    <div className = "painON_checkbox">
                                        <div>8</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperLeftChange} type ="checkbox" name ="upper_left" value ="eight" checked = {this.state.upper_left.eight}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>7</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperLeftChange} type ="checkbox" name ="upper_left" value ="seven" checked = {this.state.upper_left.seven}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>6</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperLeftChange} type ="checkbox" name ="upper_left" value ="six" checked = {this.state.upper_left.six}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>5</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperLeftChange} type ="checkbox" name ="upper_left" value ="five" checked = {this.state.upper_left.five}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>4</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperLeftChange} type ="checkbox" name ="upper_left" value ="four" checked = {this.state.upper_left.four}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>3</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperLeftChange} type ="checkbox" name ="upper_left" value ="three" checked = {this.state.upper_left.three}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>2</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperLeftChange} type ="checkbox" name ="upper_left" value ="two" checked = {this.state.upper_left.two}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>1</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperLeftChange} type ="checkbox" name ="upper_left" value ="one" checked = {this.state.upper_left.one}/></div>
                                    </div>
                                </div>  
                            </div>
                            <div className="upper_left">
                                <p>Upper Right</p>
                                <div className = "painON_content">
                                    <div className = "painON_checkbox">
                                        <div>1</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperRightChange} type ="checkbox" name ="upper_right" value ="one" checked = {this.state.upper_right.one}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>2</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperRightChange} type ="checkbox" name ="upper_right" value ="two" checked = {this.state.upper_right.two}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>3</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperRightChange} type ="checkbox" name ="upper_right" value ="three" checked = {this.state.upper_right.three}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>4</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperRightChange} type ="checkbox" name ="upper_right" value ="four" checked = {this.state.upper_right.four}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>5</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperRightChange} type ="checkbox" name ="upper_right" value ="five" checked = {this.state.upper_right.five}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>6</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperRightChange} type ="checkbox" name ="upper_right" value ="six" checked = {this.state.upper_right.six}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>7</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperRightChange} type ="checkbox" name ="upper_right" value ="seven" checked = {this.state.upper_right.seven}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>8</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleUpperRightChange} type ="checkbox" name ="upper_right" value ="eight" checked = {this.state.upper_right.eight}/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "upper">
                            <div className="upper_left">
                                <p>Lower Left</p>
                                <div className = "painON_content">
                                    <div className = "painON_checkbox">
                                        <div>8</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerLeftChange} type ="checkbox" name ="lower_left" value ="eight" checked = {this.state.lower_left.eight}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>7</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerLeftChange} type ="checkbox" name ="lower_left" value ="seven" checked = {this.state.lower_left.seven}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>6</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerLeftChange} type ="checkbox" name ="lower_left" value ="six" checked = {this.state.lower_left.six}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>5</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerLeftChange} type ="checkbox" name ="lower_left" value ="five" checked = {this.state.lower_left.five}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>4</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerLeftChange} type ="checkbox" name ="lower_left" value ="four" checked = {this.state.lower_left.four}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>3</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerLeftChange} type ="checkbox" name ="lower_left" value ="three" checked = {this.state.lower_left.three}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>2</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerLeftChange} type ="checkbox" name ="lower_left" value ="two" checked = {this.state.lower_left.two}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>1</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerLeftChange} type ="checkbox" name ="lower_left" value ="one" checked = {this.state.lower_left.one}/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="upper_left">
                                <p>Lower Right</p>
                                <div className = "painON_content">
                                    <div className = "painON_checkbox">
                                        <div>1</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerRightChange} type ="checkbox" name ="lower_right" value ="one" checked = {this.state.lower_right.one}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>2</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerRightChange} type ="checkbox" name ="lower_right" value ="two" checked = {this.state.lower_right.two}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>3</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerRightChange} type ="checkbox" name ="lower_right" value ="three" checked = {this.state.lower_right.three}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>4</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerRightChange} type ="checkbox" name ="lower_right" value ="four" checked = {this.state.lower_right.four}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>5</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerRightChange} type ="checkbox" name ="lower_right" value ="five" checked = {this.state.lower_right.five}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>6</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerRightChange} type ="checkbox" name ="lower_right" value ="six" checked = {this.state.lower_right.six}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>7</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerRightChange} type ="checkbox" name ="lower_right" value ="seven" checked = {this.state.lower_right.seven}/></div>
                                    </div>
                                    <div className = "painON_checkbox">
                                        <div>8</div>
                                        <div><img src="images/singT.jpg" alt="Tooth"/></div>
                                        <div><input onChange = {this.handleLowerRightChange} type ="checkbox" name ="lower_right" value ="eight" checked = {this.state.lower_right.eight}/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="BDR_BDC">
                        <div className = "BDR_content">
                            <p>BDR</p>
                            1<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="one" checked = {this.state.BDR.one}/>
                            2<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="two" checked = {this.state.BDR.two}/>
                            3<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="three" checked = {this.state.BDR.three}/>
                            4<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="four" checked = {this.state.BDR.four}/>
                            5<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="five" checked = {this.state.BDR.five}/>
                            6<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="six" checked = {this.state.BDR.six}/>
                            7<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="seven" checked = {this.state.BDR.seven}/>
                            8<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="eight" checked = {this.state.BDR.eight}/>
                            9<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="nine" checked = {this.state.BDR.nine}/>
                            U<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="u" checked = {this.state.BDR.U}/>
                            L<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="first_L" checked = {this.state.BDR.first_L}/>
                            L<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="second_L" checked = {this.state.BDR.second_L}/>
                            R<input onChange = {this.handleBDR} type ="checkbox" name ="bdr" value ="r" checked = {this.state.BDR.R}/>
                        </div>
                        <div className = "BDR_content">
                            <p>BDC</p>
                            1<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="one" checked = {this.state.BDC.one}/>
                            2<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="two" checked = {this.state.BDC.two}/>
                            3<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="three" checked = {this.state.BDC.three}/>
                            4<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="four" checked = {this.state.BDC.four}/>
                            5<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="five" checked = {this.state.BDC.five}/>
                            6<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="six" checked = {this.state.BDC.six}/>
                            7<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="seven" checked = {this.state.BDC.seven}/>
                            8<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="eight" checked = {this.state.BDC.eight}/>
                            9<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="nine" checked = {this.state.BDC.nine}/>
                            U<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="u" checked = {this.state.BDC.U}/>
                            L<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="first_L" checked = {this.state.BDC.first_L}/>
                            L<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="second_L" checked = {this.state.BDC.second_L}/>
                            R<input onChange = {this.handleBDC} type ="checkbox" name ="bdc" value ="r" checked = {this.state.BDC.R}/>
                        </div>
                    </div>

                    <div className = "afterBDR">
                            Attrition<input onChange = {this.handleAfterBDR} type ="checkbox" name ="after_bdr" value ="attrition" checked = {this.state.AfterBDR.attrition}/>
                            Abration<input onChange = {this.handleAfterBDR} type ="checkbox" name ="after_bdr" value ="abration" checked = {this.state.AfterBDR.abration}/>
                            Irrotion<input onChange = {this.handleAfterBDR} type ="checkbox" name ="after_bdr" value ="irrotion" checked = {this.state.AfterBDR.irrotion}/>
                    </div>
                    
                </div>
                <div className = "painON_align">
                    <div className="payment">
                        <p className="patient_p">Payment & Visit</p>
                        <div className = "name_age">
                            <div><label>Total Cost</label><br/><input type = 'number' name = "total" value = {this.state.total} onChange={this.handleFieldChange}/></div>
                            <div><label>Due</label><br/><input type = 'number' name = "due" value = {this.state.due} onChange={this.handleFieldChange}/></div>
                        </div>
                        <div className = "name_age">
                            <div><label>Next Visit</label><br/><input type = 'date' name = "nextVisit" value = {this.state.nextVisit} onChange={this.handleFieldChange}/></div>
                            <div><label>Date of Appointment</label><br/><input type = 'date' name = "dateOfAppointment" value = {this.state.dateOfAppointment} onChange={this.handleFieldChange}/></div>
                        </div>
                    </div>
                </div>
                <input type  = "file" name = "file" placeholder = "Choose the Prescription" onChange = {this.handleFileChange} />
                 { this.state.loading ? <h3>Loading ....</h3> : <img src={this.state.pic} alt = "prescription"/>}
                <div className = "centerBtn">
                    <button type ="submit">Submit</button> 
                </div>
                           
                 </form>

                 
                
                 
                <div className = "centerBtn">
                    <button onClick={this.generatePdf}>Generate Pdf</button>
                </div>
            </div>
            
          
        );
      }
}

export default Form
