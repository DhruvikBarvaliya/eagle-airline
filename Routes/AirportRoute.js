const express = require('express');
const router = express.Router();
const airportController = require('../Controllers/AirportController');

router.get('/', (req, res) => {
    res.send("Inside AirportRouter");
});

router.post('/addAirport', airportController.addAirport);

module.exports = router;