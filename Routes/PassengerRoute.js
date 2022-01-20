const express = require('express');
const router = express.Router();
const passengerController = require('../Controllers/PassengerController');

router.get('/', (req, res) => {
    res.send("Inside PassengerRouter");
});

router.post('/addPassenger', passengerController.addPassenger);
router.get('/getAllPassenger', passengerController.getAllPassenger);
router.get('/getPassengerById/:passenger_id', passengerController.getPassengerById); // Path Variables
router.put('/updatePassenger/:passenger_id', passengerController.updatePassenger); // Path Variables
router.delete('/deletePassenger/:passenger_id', passengerController.deletePassenger); // Path Variables

module.exports = router;