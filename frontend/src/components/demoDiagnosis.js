import React, { Component } from 'react'

export default class demoDiagnosis extends Component {

    constructor(props){
        super(props)
        this.state = {
            problemStatement : '',
            symptom : '',
            diagnosis : '',
            advice : '',
            comment : '',
            isDiagnosis : true,
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
        }

       
    }

    handleSubmit = (e) =>{
		e.preventDefault();
		this.props.onSubmit(this.state)
	}
    handleFieldChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
          })
    }

    handleMedicalCheckBoxChange = (ev) => {
        let state = this.state;
        state.medicalHistory[ev.target.value] = ev.target.checked;
        this.setState(state);
    }

    handleMedicalProblemChange =(ev) =>{
        let state = this.state;
        state.problem[ev.target.value] = ev.target.checked;
        this.setState(state);
    }

    handleTreatmentChange = (ev) =>{
        let state = this.state;
        state.treatment[ev.target.value] = ev.target.checked;
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

    handleBDC = (ev) => {
        let state = this.state;
        state.BDC[ev.target.value] = ev.target.checked;
        this.setState(state);
    }

    handleAfterBDR = (ev) => {
        let state = this.state;
        state.AfterBDR[ev.target.value] = ev.target.checked;
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

  render() {
    return (
      <div className='boxed'>
        <fieldset>
            <legend>Diagnosis</legend>
            <form onSubmit={this.handleSubmit}>
                <label>Problem : </label> <input type = "text" name = "problemStatement" value = {this.state.problemStatement} onChange={this.handleFieldChange}/><br/>
				<label>Symptom : </label> <input type = "text" name = "symptom" value = {this.state.symptom} onChange={this.handleFieldChange}/><br/>
				<label>Diagnosis : </label> <input type = "text" name = "diagnosis" value = {this.state.diagnosis} onChange={this.handleFieldChange}/><br/>
				<label>Advice : </label> <input type = "text" name = "advice" value = {this.state.advice} onChange={this.handleFieldChange}/><br/>
				<label>Comment : </label> <input type = "text" name = "comment" value = {this.state.comment} onChange={this.handleFieldChange}/><br/>
				<div className="medical_history">
					<p className="patient_p">Medical History</p>
					<div className="medical_history_content">
						<div><label>Diabetics: </label><input  name="medicalHistory" type="checkbox" value ="isDiabetics" onChange={this.handleMedicalCheckBoxChange} checked={this.state.medicalHistory.isDiabetics} /></div>
						<div><label>Heart Diseases: </label><input  name="medicalHistory" type="checkbox" value ="isHeartDiseases"  onChange={this.handleMedicalCheckBoxChange} checked={this.state.medicalHistory.isHeartDiseases}/></div>
						<div><label>Kidney Diseases: </label><input  name="medicalHistory"  type="checkbox" value ="isKidneyDiseases"  onChange={this.handleMedicalCheckBoxChange} checked={this.state.medicalHistory.isKidneyDiseases}/></div>
						<div><label>Hepatities: </label><input  name="medicalHistory"  type="checkbox" value ="isHepatities" onChange={this.handleMedicalCheckBoxChange} checked={this.state.medicalHistory.isHepatities}/></div>
						<div><label>Drug Reaction: </label><input  name="medicalHistory"  type="checkbox" value ="isDrugReaction" onChange={this.handleMedicalCheckBoxChange} checked={this.state.medicalHistory.isDrugReaction}/></div>
					</div>
            	</div>
                <div className = "problem">
                    <p className="patient_p">Problem</p>
                    <div className = "medical_history_content">
                        <div><label>Calculass Palque, Stain, Stone : </label><input  name="problem" value = "calculass" type="checkbox" checked={this.state.calculass} onChange={this.handleMedicalProblemChange} /></div>
                        <div><label>Gum Bleeding: </label><input  name="problem" value = "gumBleeding" type="checkbox" checked={this.state.gumBleeding} onChange={this.handleMedicalProblemChange} /></div>
                        <div><label>Foul Odor: </label><input  name="problem" value = "odor" type="checkbox" checked={this.state.odor} onChange={this.handleMedicalProblemChange} /></div>
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
                <div>
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
                </div>

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
                <div className = "centerBtn"><button type='submit'>Next</button></div>

            </form>

        </fieldset>

      </div>
    )
  }
}
