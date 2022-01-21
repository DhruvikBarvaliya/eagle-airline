const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

EmployeeSchema = new Schema({
    employee_id: { type: String, unique: true, required: true, trim: true },
    first_name: { type: String, required: true, trim: true },
    middle_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    passport_no: { type: String, trim: true },
    date_of_birth: { type: Date, trim: true },
    sex: { type: String, trim: true },
    address: { type: String, trim: true },
    city: { type: String, trim: true },
    zip_code: { type: Number, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true },
    email_id: { type: String, unique: true, trim: true },
    contact_no: { type: String, trim: true },
    user_name: { type: String, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    confirm_password: { type: String, required: true, trim: true },
    department_name: { type: String, trim: true },
    hired_date: { type: Date, default: Date.now, trim: true },
    salary: { type: Number, trim: true },
    shift: { type: String, default: 'DayShift', trim: true },
    job_type: { type: String, trim: true },
    position: { type: String, trim: true },
    airport_id: { type: String, required: true, ref: 'airports', trim: true }
},
    { versionKey: false });

module.exports = mongoose.model('employees', EmployeeSchema);