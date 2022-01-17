const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const AirlineSchema = new Schema({
    airline_id: { type: String },
    airline_name: { type: String },
    airline_capacity: { type: Number },
    airline_three_digit_code: { type: String }
});

module.exports = mongoose.model('airlines', AirlineSchema);