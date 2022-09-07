import React, { Component } from 'react'

export default class PatientCost extends Component {

    constructor(props){
        super(props)
        this.state = {
            total : null,
            due : null,
            nextVisit : null,
            dateOfAppointment : null,
            isCost : true
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
		this.props.onSubmit(this.state)
    }

    handleFieldChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
          })
      }
  render() {
    return (
      <div className="boxed">
        <fieldset>
            <legend>Payment & Visit</legend>
            <form onSubmit={this.handleSubmit}>
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
                <div className = "centerBtn"><button type='submit'>Next</button></div>
            </form>

        </fieldset>
           
      </div>
    )
  }
}
