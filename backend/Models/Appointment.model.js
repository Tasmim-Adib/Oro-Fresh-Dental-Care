const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    date : {
        type : String,
        required : true
    },

    contact : {
        type : String
    }
})

const Appointment = mongoose.model('appointment', AppointSchema);
module.exports = Appointment;