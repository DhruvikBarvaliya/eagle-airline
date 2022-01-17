const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const FlightSchema = new Schema({
    flight_id: { type: String },
    flight_no: { type: String },
    flight_code: { type: String },
    flight_depature_from: { type: String },
    flight_arrival_to: { type: String },
    depature_date_time: { type: Date },
    arrival_date_time: { type: Date },
    layover_time: { type: Date },
    no_of_stope: { type: Number },
    distance: { type: Number },
    airline_id: { type: String },
    airport_id: { type: String },
    fares: { type: Number },
    status: { type: String },
});

module.exports = mongoose.model('flights', FlightSchema);