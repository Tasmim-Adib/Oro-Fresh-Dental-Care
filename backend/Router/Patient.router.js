
const express = require('express');
const router = express.Router();
const Patient = require('../Models/Patients.model');
const Appointment = require('../Models/Appointment.model');


router.post('/save', (req, res, next) =>{
    const data = req.body;
    const patient = new Patient(data);
    patient.save((error) =>{
        if(error){
            res.status(500).json({ msg : 'Sorry ! internal server error !!!'});
        }
        else{
            res.json({
                msg : 'We received the data!!!'
            });
        }
    });
    

});

router.post('/appointment', (req, res, next) =>{
    const appointData = req.body;
    const appointment = new Appointment(appointData);
    appointment.save((error) =>{
        if(error){
            res.status(500).json({ msg : 'Sorry ! internal server error !!!'});
        }
        else{
            res.json({
                msg : 'We received the data!!!'
            });
        }
    });
    

});

router.get('/patients', async (req, res, next) =>{
    const contact = req.query.contact;
    try{
        const patient = await Patient.findOne({contact : contact});
        res.send(patient)
    }catch(error){
        console.log(error.message);
    }
})

router.get('/showAppointments', async (req, res, next) =>{
    const date = req.query.date;
    try{
        const appoint = await Appointment.find({date : date});
        res.send(appoint)
    }catch(error){
        console.log(error.message);
    }
})

router.patch('/update/:id', async (req, res, next) =>{
    try{
        const id = req.params.id;
        const updates = req.body;
        const options = {new : true};
        const result = await Patient.findByIdAndUpdate(id,updates,options);
        res.json({
            msg : "Updated Successfully !!"
        });
    }catch(error){
        res.json({
            msg : "Server error !!!"
        })
    }
})
module.exports = router;