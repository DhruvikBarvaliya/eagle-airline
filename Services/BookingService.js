const bookingModel = require('../Models/BookingModel');

module.exports = {
    addBooking: data => {
        return bookingModel.create(data);
    },
    getAllBooking: () => {
        return bookingModel.find();
    },
    getBookingById: id => {
        return bookingModel.findById(id);
    },
    updateBooking: (id, body) => {
        return bookingModel.findByIdAndUpdate(id, body);
    },
    deleteBooking: id => {
        return bookingModel.findByIdAndDelete({ _id: id });
    }
};