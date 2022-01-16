const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PassengerSchema = new Schema({
    passenger_id: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    date_of_birth: Date,
    sex: String,
    address: String,
    city: String,
    zip_code: String,
    state: String,
    country: String,
    email_id: String,
    user_name: String,
    password: String,
    confirm_password: String,
    passport_no: String,
    contact_no: String
});

module.exports = mongoose.model('passenger', PassengerSchema);