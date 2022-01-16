const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
    airport_id: String,
    airport_code: String,
    airport_name: String,
    airport_city: String,
    airport_state: String,
    airport_country: String,
    airport_contact_no: String
});

module.exports = mongoose.model('airport', AirportSchema);