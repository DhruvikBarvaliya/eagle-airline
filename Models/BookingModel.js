const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    booking_id: String,
    seat_no: String,
    class: String,
    passenger_id: String,
    passport_no: String,
    first_name: String,
    last_name: String,
    contact_no: String,
    email_id: String,
    flight_id: String,
    flight_no: String,
    source: String,
    destination: String,
    depature_date_time: Date,
    arrival_date_time: Date,
    fare: Number,
    insurance: String,
    date_of_booking: Date,
    date_of_travel: Date,

});

module.exports = mongoose.model('booking', BookingSchema);