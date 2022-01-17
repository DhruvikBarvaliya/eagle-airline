const express = require('express')
const router = express.Router();
const bookingController = require('../Controllers/BookingController');


router.get('/', (req, res) => {
    res.send("Inside BookingRouter");
});

router.post('/addBooking', bookingController.addBooking);

module.exports = router;