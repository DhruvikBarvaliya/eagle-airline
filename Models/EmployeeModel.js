const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

EmployeeSchema = new Schema({
    employee_id: { type: String,unique: true,required: true },
    first_name: { type: String,required: true },
    middle_name: { type: String },
    last_name: { type: String },
    passport_no: { type: String,unique: true},
    date_of_birth: { type: Date },
    sex: { type: String },
    address: { type: String },
    city: { type: String },
    zip_code: { type: Number },
    country: { type: String },
    email_id: { type: String,unique: true },
    contact_no: { type: String },
    user_name: { type: String,unique: true },
    password: { type: String,required: true },
    confirm_password: { type: String,required: true },
    department_name: { type: String },
    hired_date: { type: Date, default: Date.now },
    salary: { type: Number },
    shift: { type: String, default: 'DayShift' },
    job_type: { type: String },
    position: { type: String },
    airport_id: { type: mongoose.Schema.Types.ObjectId,/* required: true, */ ref: 'airports' }
},
    { versionKey: false });

module.exports = mongoose.model('employees', EmployeeSchema);