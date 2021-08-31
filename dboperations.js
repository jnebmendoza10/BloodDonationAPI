const config = require('./dbconnection');
const sql = require('mssql');
const location = require('./Locations');
const appointment = require('./Appointment');
const donor = require('./Donor');
//Locations Operation
async function getLocations(){
    try{
        let pool = await sql.connect(config);
        let retrieveLocations = await pool.request().execute('spGetLocations');
        return retrieveLocations.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

//Appointments Operation
async function getAppointments(id){
    try{
        let pool = await sql.connect(config);
        let retrieveAppointments = await pool.request()
            .input('@donorid', sql.Int, id)
            .execute('spGetAppointments');
        
        return retrieveAppointments.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function deleteAppointment(id){
    try{
        let pool = await sql.connect(config);
        let removeAppointment = await pool.request()
            .input('@appointmentid', sql.Int, id)
            .execute('spDeleteAppointment');
        
        return removeAppointment.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function setAppointment(appointment){
    try{
        let pool = await sql.connect(config);
        let createAppointment = await pool.request()
            .input('@donorid', sql.Int, appointment.DonorId)
            .input('@bloodbank', sql.VarChar, appointment.Location)
            .input('@appointmentdate', sql.Date, appointment.AppointmentDate)
            .execute('spSetAppointment');
        
        return createAppointment.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function updateAppointment(appointment, id){
    try{
        let pool = await sql.connect(config);
        let putAppointment = await pool.request()
            .input('@appointmentid', sql.Int, id)
            .input('@bloodbank', sql.VarChar,appointment.Location)
            .input('@appointmentdate', sql.Date, appointment.AppointmentDate)
            .execute('spUpdateAppointment');
        
        return putAppointment.recordsets;

    }
    catch(error){
        console.log(error);
    }
}

// Donor Operations
async function getDonor(id){
    try{
        let pool = await  sql.connect(config);
        let getDonorById = await pool.request()
            .input('@userid', sql.Int, id)
            .execute('spGetDonorById');
        
        return getDonorById.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function loginDonor(donor){
    try{
        let pool = await sql.connect(config);
        let login = await pool.request()
            .input('@email', sql.VarChar, donor.Email)
            .input('@password', sql.VarChar, donor.Password)
            .execute('spLoginDonor');
        
        return login.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function registerDonor(donor){
    try{
        let pool = await sql.connect(config);
        let createDonor = await pool.request()
            .input('@firstname', sql.VarChar, donor.FirstName)
            .input('@lastname', sql.VarChar, donor.LastName)
            .input('@dateofbirth', sql.DateTime, donor.DateOfBirth)
            .input('@address', sql.VarChar, donor.Address)
            .input('@contact', sql.VarChar, donor.ContactNumber)
            .input('@bloodgroup', sql.VarChar. donor.BloodGroup)
            .input('@email', sql.VarChar, donor.Email)
            .input('@password', sql.VarChar, donor.Password)
            .execute('spRegisterDonor');

        return createDonor.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function updateDonor(donor){
    try{
        let pool = await sql.connect(config);
        let putDonor = await pool.request()
            .input('@firstname', sql.VarChar, donor.FirstName)
            .input('@lastname', sql.VarChar, donor.LastName)
            .input('@dateofbirth', sql.DateTime, donor.DateOfBirth)
            .input('@address', sql.VarChar, donor.Address)
            .input('@contact', sql.VarChar, donor.ContactNumber)
            .input('@bloodgroup', sql.VarChar. donor.BloodGroup)
            .input('@email', sql.VarChar, donor.Email)
            .input('@password', sql.VarChar, donor.Password)
            .execute('spUpdateDonorProfile');

        return putDonor.recordsets;
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {
    getLocations : getLocations,
    getAppointments : getAppointments,
    deleteAppointment : deleteAppointment,
    setAppointment : setAppointment,
    updateAppointment : updateAppointment,
    getDonor : getDonor,
    loginDonor : loginDonor,
    registerDonor : registerDonor,
    updateDonor : updateDonor
}