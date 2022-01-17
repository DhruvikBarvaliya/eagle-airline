const bookingModel = require('../Models/BookingModel');

module.exports = {
    create: data => {
        return bookingModel.create(data);
    }
};