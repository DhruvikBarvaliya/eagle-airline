const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    city_id: String,
    city_name: String,
    city_state: String,
    city_country: String
});

module.exports = mongoose.model('city', CitySchema)