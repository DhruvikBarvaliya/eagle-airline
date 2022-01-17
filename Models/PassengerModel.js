const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PassengerSchema = new Schema({
    passenger_id: { type: String},
    first_name: { type: String},
    middle_name: { type: String},
    last_name: { type: String},
    date_of_birth: { type: Date},
    sex: { type: String},
    address: { type: String},
    city: { type: String},
    zip_code: { type: String},
    state: { type: String},
    country: { type: String},
    email_id: { type: String},
    user_name: { type: String},
    password: { type: String},
    confirm_password: { type: String},
    passport_no: { type: String},
    contact_no: { type: String}
});

module.exports = mongoose.model('passenger', PassengerSchema);