const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const FlightSchema = new Schema({
    flight_id: { type: String, unique: true, required: true, trim: true },
    flight_no: { type: String, unique: true, required: true, trim: true },
    flight_code: { type: String, trim: true },
    flight_depature_from: { type: String, required: true, trim: true },
    flight_arrival_to: { type: String, required: true, trim: true },
    depature_date_time: { type: Date, required: true, trim: true },
    arrival_date_time: { type: Date, required: true, trim: true },
    layover_time: { type: Date, trim: true },
    no_of_stope: { type: Number, default: 0, trim: true },
    distance: { type: Number, required: true, trim: true },
    airline_id: { type: mongoose.Schema.Types.ObjectId, ref: 'airlines', trim: true },
    airport_id: { type: mongoose.Schema.Types.ObjectId, ref: 'airports', trim: true },
    fares: { type: Number, required: true, trim: true },
    status: { type: Boolean, default: true, trim: true }
},
    { versionKey: false });

module.exports = mongoose.model('flights', FlightSchema);