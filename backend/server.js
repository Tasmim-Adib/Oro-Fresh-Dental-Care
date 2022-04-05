const express = require('express');
const patientRoute = require('./Router/Patient.router');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://cluster0.chrde.mongodb.net/',{
    dbName : 'Dentist',
    user : 'adib',
    pass : 'ggD4!pgULeKE9zr'
})
.then(() =>{
    console.log('MongoDB connected')
})
//mongodb+srv://adib:<password>@cluster0.chrde.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(cors());
app.use('/',patientRoute);

app.use((req, res, next) =>{
    const err = new Error("Not Found");
    err.status = 404
    next(err)
})


app.use((err, req, res, next) =>{
    res.status(err.status || 500);
    res.send({
        error : {
            status : err.status || 500,
            message : err.message
        }
    });
});

app.listen(5000, () =>{
    console.log(`Server is at http://localhost:5000`);
})