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
    sex : String,
    reference : String,
    area :String,
    totalCost : Number,
    due : Number,
    nextVisit : Date,
    appointment : Date,
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
    pic : String
})

const Patient = mongoose.model('patient', PatientSchema);
module.exports = Patient;