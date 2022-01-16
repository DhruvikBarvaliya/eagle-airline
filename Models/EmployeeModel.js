const mongoose = require('mongoose');
const Schema = mongoose.Schema;

EmployeeSchema = new Schema({
    employee_id: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    passport_no: String,
    date_of_birth: Date,
    sex: String,
    address: String,
    city: String,
    zip_code: String,
    country: String,
    email_id: String,
    contact_no: String,
    user_name: String,
    password: String,
    confirm_password: String,
    department_name: String,
    hired_date: Date,
    salary: Number,
    shift: String,
    job_type: String,
    position: String,
    airport_id: String
});
