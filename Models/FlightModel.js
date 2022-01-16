const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
    flight_id: String,
    flight_no: String,
    flight_code: String,
    flight_depature_from: String,
    flight_arrival_to: String,
    depature_date_time: Date,
    arrival_date_time: Date,
    layover_time: Date,
    no_of_stope: Number,
    distance: Number,
    airline_id: String,
    airport_id: String,
    fares: Number,
    status: String,
});

module.exports = mongoose.model('flight', FlightSchema);