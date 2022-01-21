const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.pluralize(null);

const BookingSchema = new Schema({
    booking_id: { type: String, unique: true, required: true, trim: true },
    seat_no: { type: String, trim: true },
    class: { type: String, trim: true },
    passenger_id: { type: mongoose.Schema.Types.ObjectId, ref: 'passengers', trim: true },
    passport_no: { type: String, trim: true },
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, trim: true },
    contact_no: { type: String, required: true, trim: true },
    email_id: { type: String, required: true, trim: true },
    flight_id: { type: mongoose.Schema.Types.ObjectId, ref: 'flights', trim: true },
    flight_no: { type: String, trim: true },
    source: { type: String, required: true, trim: true },
    destination: { type: String, required: true, trim: true },
    depature_date_time: { type: Date, trim: true },
    arrival_date_time: { type: Date, trim: true },
    fare: { type: Number, trim: true },
    insurance: { type: Boolean, default: true, trim: true },
    date_of_booking: { type: Date, default: Date.now, trim: true },
    date_of_travel: { type: Date, trim: true }
},
    { versionKey: false });

module.exports = mongoose.model('bookings', BookingSchema);