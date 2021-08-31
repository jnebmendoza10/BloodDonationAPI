const operations = require('./dboperations');
const express = require('express');
const cors = require('cors');
const app = express();

const appointment = require('./Appointment');
const donor = require('./Donor');

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());



const port = process.env.port || 3000;
app.listen(port);
console.log("Location API is running at port: " + port);

app.use((request, response, next) =>{
    console.log('middleware');
    next();
})


//OPERATIONS

//Location
app.get('/locations', (request, response) => {
    operations.getLocations().then(result => {
        response.json(result[0]);
    })
});

//Appointments
app.get('/getappointments/:id', (request, response) =>{
    operations.getAppointments(request.params.id).then(result =>{
        response.json(result);
    })
})

app.delete('/deleteappointment/:id', (request, response) =>{
    operations.deleteAppointment(request.params.id).then(result =>{
        response.status(201).json(result);
    })
})

app.post('/registerappointment', (request, response) =>{
    let appointment = {...request.body}

    operations.setAppointment(appointment).then(result =>{
        response.status(201).json(result);
    })
})

app.put('/updateappointment/:id', (request, response) =>{
    let appointment = {...request.body}

    operations.updateAppointment(appointment, request.params.id).then(result =>{
        response.status(201).json(result);
    })
})

//Donor 
app.get('/getdonor/:id', (request, response) =>{
    operations.getDonor(request.params.id).then(result =>{
        response.json(result);
    })
})


app.post('/login', (request, response) =>{
    let donor = {...request.body}
    operations.loginDonor(donor).then(result =>{
        response.status(201),json(result);
    })
})

app.post('/register', (request, response) =>{
    let donor = {...request.body}
    operations.registerDonor(donor).then(result =>{
        response.status(201),json(result);
    })
})


app.put('/updatedonor', (request, response) =>{
    let donor = {...request.body}
    operations.updateDonor(donor).then(result =>{
        response.status(201),json(result);
    })
})
