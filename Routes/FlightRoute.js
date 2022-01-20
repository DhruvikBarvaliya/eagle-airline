const express = require('express');
const router = express.Router();
const flightController = require('../Controllers/FlightController');

router.get('/', (req, res) => {
    res.send('Inside FlightRouter');
});

router.post('/addFlight', flightController.addFlight);
router.get('/getAllFlight', flightController.getAllFlight);
router.get('/getFlightById?:flight_id', flightController.getFlightById); // Query Params
router.put('/updateFlight?:flight_id', flightController.updateFlight); // Query Params
router.delete('/deleteFlight?:flight_id', flightController.deleteFlight); // Query Params

module.exports = router;

