const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AirlineSchema = new Schema({
    airline_id: String,
    airline_name: String,
    airline_capacity: Number,
    airline_three_digit_code: String
});

module.exports = mongoose.model('airline', AirlineSchema);