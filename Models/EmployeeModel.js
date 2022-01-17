const mongoose = require('mongoose');
const Schema = mongoose.Schema;

EmployeeSchema = new Schema({
    employee_id: { type: String},
    first_name: { type: String},
    middle_name: { type: String},
    last_name: { type: String},
    passport_no: { type: String},
    date_of_birth: { type: Date},
    sex: { type: String},
    address: { type: String},
    city: { type: String},
    zip_code: { type: String},
    country: { type: String},
    email_id: { type: String},
    contact_no: { type: String},
    user_name: { type: String},
    password: { type: String},
    confirm_password: { type: String},
    department_name: { type: String},
    hired_date: { type: Date},
    salary: { type: Number},
    shift: { type: String},
    job_type: { type: String},
    position: { type: String},
    airport_id: { type: String}
});
