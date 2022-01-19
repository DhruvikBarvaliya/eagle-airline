const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const PassengerSchema = new Schema({
    passenger_id: { type: String,unique: true ,required: true},
    first_name: { type: String ,required: true},
    middle_name: { type: String },
    last_name: { type: String },
    date_of_birth: { type: Date },
    sex: { type: String },
    address: { type: String },
    city: { type: String },
    zip_code: { type: Number },
    state: { type: String },
    country: { type: String },
    email_id: { type: String,unique: true,required: true },
    user_name: { type: String,unique: true },
    password: { type: String,required: true },
    confirm_password: { type: String,required: true },
    passport_no: { type: String },
    contact_no: { type: String,required: true }
},
    { versionKey: false });

module.exports = mongoose.model('passengers', PassengerSchema);