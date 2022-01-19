const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const AirportSchema = new Schema({
    airport_id: { type: String, unique: true, required: true },
    airport_code: { type: String, required: true },
    airport_name: { type: String, unique: true, required: true },
    airport_city: { type: mongoose.Schema.Types.ObjectId, /* required: true, */ ref: 'citys' },
    airport_state: { type: String },
    airport_country: { type: String },
    airport_contact_no: { type: String }
},
    { versionKey: false });

module.exports = mongoose.model('airports', AirportSchema);