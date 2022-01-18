const express = require('express')
const router = express.Router();
const bookingController = require('../Controllers/BookingController');


router.get('/', (req, res) => {
    res.send("Inside BookingRouter");
});

router.get('/getAllBooking', bookingController.getAllBooking);
router.get('/getBookingById/:id', bookingController.getBookingById);
router.post('/addBooking', bookingController.addBooking);
router.put('/updateBooking/:id', bookingController.updateBooking);
router.delete('/deleteBooking/:id', bookingController.deleteBooking);

module.exports = router;