const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const AirportSchema = new Schema({
    airport_id: { type: String, unique: true, required: true, trim: true },
    airport_code: { type: String, required: true, trim: true },
    airport_name: { type: String, unique: true, required: true, trim: true },
    airport_city: { type: String, required: true, ref: 'citys', trim: true },
    airport_state: { type: String, trim: true },
    airport_country: { type: String, trim: true },
    airport_contact_no: { type: String, trim: true }
},
    { versionKey: false });

module.exports = mongoose.model('airports', AirportSchema);