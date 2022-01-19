const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const AirlineSchema = new Schema({
    airline_id: { type: String,unique: true,required: true },
    airline_name: { type: String,unique: true ,required: true},
    airline_capacity: { type: Number, default: '100',required: true },
    airline_three_digit_code: { type: String ,required: true}
},
    { versionKey: false });

module.exports = mongoose.model('airlines', AirlineSchema);