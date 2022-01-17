const bookingService = require('../Services/BookingService');

module.exports = {
    addBooking: (req, res) => {
        const body = req.body;
        bookingService.create(body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Booking Inserted",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Insert"
                })
            }
        })

    }
}