const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
    airport_id: { type: String },
    airport_code: { type: String },
    airport_name: { type: String },
    airport_city: { type: String },
    airport_state: { type: String },
    airport_country: { type: String },
    airport_contact_no: { type: String }
});

module.exports = mongoose.model('airport', AirportSchema);