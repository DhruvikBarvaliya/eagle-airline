const bookingModel = require('../Models/BookingModel');

module.exports = {
    addBooking: data => {
        return bookingModel.create(data);
    },
    getAllBooking: () => {
        return bookingModel.find();
    },
    getBookingById: booking_id => {
        return bookingModel.findOne(booking_id);
    },
    updateBooking: (booking_id, body) => {
        return airlineModel.updateOne({ booking_id: booking_id }, body);
        // return bookingModel.findOneAndUpdate(booking_id, body);
    },
    deleteBooking: booking_id => {
        return airlineModel.deleteOne({ booking_id: booking_id });
        // return bookingModel.findOneAndDelete(booking_id);
    }
};