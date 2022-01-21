const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const PassengerSchema = new Schema({
    passenger_id: { type: String, unique: true, required: true, trim: true },
    first_name: { type: String, required: true, trim: true },
    middle_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    date_of_birth: { type: Date, trim: true },
    sex: { type: String, trim: true },
    address: { type: String, trim: true },
    city: { type: String, trim: true },
    zip_code: { type: Number, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true },
    email_id: { type: String, unique: true, required: true, trim: true },
    user_name: { type: String, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    confirm_password: { type: String, required: true, trim: true },
    passport_no: { type: String, trim: true },
    contact_no: { type: String, required: true, trim: true }
},
    { versionKey: false });

module.exports = mongoose.model('passengers', PassengerSchema);