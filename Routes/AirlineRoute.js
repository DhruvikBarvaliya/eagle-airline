const express = require('express');
const router = express.Router();
const airlineController = require('../Controllers/AirlineController');

router.get('/', (req, res) => {
    res.send("Inside Airline Router");
});

router.get('/getAllAirline', airlineController.getAllAirline);
router.get('/getAirlineById/:id', airlineController.getAirlineById);
router.post('/addAirline', airlineController.addAirline);
router.put('/updateAirline/:id', airlineController.updateAirline);
router.delete('/deleteAirline/:id', airlineController.deleteAirline);

module.exports = router;