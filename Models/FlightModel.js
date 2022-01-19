const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const FlightSchema = new Schema({
    flight_id: { type: String,unique: true,required: true },
    flight_no: { type: String,unique: true,required: true },
    flight_code: { type: String },
    flight_depature_from: { type: String,required: true },
    flight_arrival_to: { type: String,required: true },
    depature_date_time: { type: Date,required: true },
    arrival_date_time: { type: Date ,required: true},
    layover_time: { type: Date },
    no_of_stope: { type: Number, default: 0 },
    distance: { type: Number,required: true },
    airline_id: { type: mongoose.Schema.Types.ObjectId, ref: 'airlines' },
    airport_id: { type: mongoose.Schema.Types.ObjectId, ref: 'airports' },
    fares: { type: Number ,required: true},
    status: { type: Boolean, default: true }
},
    { versionKey: false }); 

module.exports = mongoose.model('flights', FlightSchema);