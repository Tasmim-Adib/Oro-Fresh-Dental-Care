const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PatientSchema = new Schema({            
    name : {
        type : String,
        required:true
    },
    contact : {
        type : Number,
        required : true
    },
    age : Number,
    height : Number,
	weight : Number,
	systol : Number,
	diastol : Number,
	glucose : Number,
	pulse : Number,
	temperature : Number,
	oxygen : Number,
    total : Number,
    due : Number,
    nextVisit : Date,
    dateOfAppointment : Date,
    problemStatement : String,
    symptom : String,
    diagnosis : String,
    advice : String,
    comment : String,
    medicalHistory : Object,
    treatment : Object,
    problem : Object,
    pastCaseOption :{
        type : String,
        default : 'N'
    }, 
    radiologicalHistory : {
        type : String,
        default : 'N'
    },
    painOn : {
        type : Object,
        
    },
    upper_left : Object,
    upper_right : Object,
    lower_left : Object,
    lower_right : Object,
    BDR : Object,
    BDC : Object,
    AfterBDR : Object,
    pic : String,
    preview : String
})

const Patient = mongoose.model('patient', PatientSchema);
module.exports = Patient;