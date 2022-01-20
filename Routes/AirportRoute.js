const express = require('express');
const router = express.Router();
const airportController = require('../Controllers/AirportController');

router.get('/', (req, res) => {
    res.send("Inside AirportRouter");
});

router.post('/addAirport', airportController.addAirport);
router.get('/getAllAirport', airportController.getAllAirport);
router.get('/getAirportById/:airport_id', airportController.getAirportById); // Path Variables
router.put('/updateAirport?:airport_id', airportController.updateAirport); // Query Params
router.delete('/deleteAirport/:airport_id', airportController.deleteAirport); // Path Variables  

module.exports = router;