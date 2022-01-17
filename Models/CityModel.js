const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    city_id: { type: String},
    city_name: { type: String},
    city_state: { type: String},
    city_country: { type: String}
});

module.exports = mongoose.model('city', CitySchema)