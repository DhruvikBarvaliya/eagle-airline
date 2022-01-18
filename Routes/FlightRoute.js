const express = require('express');
const router = express.Router();
const flightController = require('../Controllers/FlightController');

router.get('/', (req, res) => {
    res.send('Inside FlightRouter');
});

router.get('/getAllFlight', flightController.getAllFlight);
router.get('/getFlightById', flightController.getFlightById);
router.post('/addFlight', flightController.addFlight);
router.put('/updateFlight', flightController.updateFlight);
router.delete('/deleteFlight', flightController.deleteFlight);

module.exports = router;

