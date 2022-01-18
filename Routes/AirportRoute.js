const express = require('express');
const router = express.Router();
const airportController = require('../Controllers/AirportController');

router.get('/', (req, res) => {
    res.send("Inside AirportRouter");
});

router.get('/getAllAirport', airportController.getAllAirport);
router.get('/getAirportById/:id', airportController.getAirportById);
router.post('/addAirport', airportController.addAirport);
router.put('/updateAirport/:id', airportController.updateAirport);
router.delete('/deleteAirport/:id', airportController.deleteAirport);

module.exports = router;