const express = require('express');
const router = express.Router();
const airlineController = require('../Controllers/AirlineController');

router.get('/', (req, res) => {
    res.send("Inside Airline Router");
});

router.post('/addAirline', airlineController.addAirline);
router.get('/getAllAirline', airlineController.getAllAirline);
router.get('/getAirlineById/:id', airlineController.getAirlineById);
router.put('/updateAirline/:id', airlineController.updateAirline);
router.delete('/deleteAirline/:id', airlineController.deleteAirline);

module.exports = router;