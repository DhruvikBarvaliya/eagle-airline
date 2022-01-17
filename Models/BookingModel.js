const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    booking_id: { type: String},
    seat_no: { type: String},
    class: { type: String},
    passenger_id: { type: String},
    passport_no: { type: String},
    first_name: { type: String},
    last_name: { type: String},
    contact_no: { type: String},
    email_id: { type: String},
    flight_id: { type: String},
    flight_no: { type: String},
    source: { type: String},
    destination: { type: String},
    depature_date_time: { type: Date},
    arrival_date_time: { type: Date},
    fare: { type: Number},
    insurance: { type: String},
    date_of_booking: { type: Date},
    date_of_travel: { type: Date},

});

module.exports = mongoose.model('booking', BookingSchema);