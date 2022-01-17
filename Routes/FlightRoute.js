const express = require('express');
const router = express.Router();
const flightController = require('../Controllers/FlightController');

router.get('/', (req, res) => {
    res.send('Welcome to Eagle Airline');
});

// router.get('/getAllFlight',flightController);
// router.get('/getFlightById',flightController);
router.post('/addFlight', flightController.addFlight);
// router.delete('/deleteFlight',flightController);
// router.put('/updateFlight',flightController);

module.exports = router;

