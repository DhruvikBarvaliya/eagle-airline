const bookingService = require('../Services/BookingService');

module.exports = {
    addBooking: (req, res) => {
        const body = req.body;
        bookingService.addBooking(body).then(result => {
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
    },
    getAllBooking: (req, res) => {
        bookingService.getAllBooking().then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All Booking Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Recive"
                })
            }
        })
    },
    getBookingById: (req, res) => {
        const booking_id = req.params.booking_id;
        bookingService.getBookingById(booking_id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Booking Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Recive",
                })
            }
        })
    },
    updateBooking: (req, res) => {
        const body = req.body;
        const booking_id = req.params.booking_id;
        bookingService.updateBooking(booking_id, body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Booking Data Updated",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Update",
                })
            }
        })
    },
    deleteBooking: (req, res) => {
        // const booking_id = req.params.booking_id;
        const booking_id = req.query.booking_id;
        bookingService.deleteBooking(booking_id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Booking Deleted",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Delete",
                })
            }
        })
    }
}