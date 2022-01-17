const express = require('express');
const router = express.Router();
const airlineController = require('../Controllers/AirlineController');

router.get('/', (req, res) => {
    res.send("Inside Airline Router");
});

router.post('/addAirline', airlineController.addAirline);

module.exports=router;