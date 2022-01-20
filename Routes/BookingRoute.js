const express = require('express')
const router = express.Router();
const bookingController = require('../Controllers/BookingController');


router.get('/', (req, res) => {
    res.send("Inside BookingRouter");
});

router.post('/addBooking', bookingController.addBooking);
router.get('/getAllBooking', bookingController.getAllBooking);
router.get('/getBookingById/:booking_id', bookingController.getBookingById); // Path Variables
router.put('/updateBooking/:booking_id', bookingController.updateBooking); // Path Variables
router.delete('/deleteBooking?:booking_id', bookingController.deleteBooking); // Query Params

module.exports = router;