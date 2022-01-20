const express = require('express');
const router = express.Router();
const airlineController = require('../Controllers/AirlineController');

router.get('/', (req, res) => {
    res.send("Inside Airline Router");
});

router.post('/addAirline', airlineController.addAirline);
router.get('/getAllAirline', airlineController.getAllAirline);
router.get('/getAirlineById?:airline_id', airlineController.getAirlineById); // Query Params
router.put('/updateAirline/:airline_id', airlineController.updateAirline); // Path Variables
router.delete('/deleteAirline/:airline_id', airlineController.deleteAirline); // Path Variables

module.exports = router;