const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presImage = new Schema({
    contact : String,
    presImage : {
        data : Buffer,
        contentType : String
    }
})

const Prescription = mongoose.model("Prescription", presImage);
module.exports = Prescription;