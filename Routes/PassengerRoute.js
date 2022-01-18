const express = require('express');
const router = express.Router();
const passengerController = require('../Controllers/PassengerController');

router.get('/', (req, res) => {
    res.send("Inside PassengerRouter");
});

router.post('/addPassenger', passengerController.addPassenger);

module.exports = router;