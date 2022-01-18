const express = require('express');
const router = express.Router();
const passengerController = require('../Controllers/PassengerController');

router.get('/', (req, res) => {
    res.send("Inside PassengerRouter");
});

router.get('/getAllPassenger', passengerController.getAllPassenger);
router.get('/getPassengerById/:id', passengerController.getPassengerById);
router.post('/addPassenger', passengerController.addPassenger);
router.put('/updatePassenger/:id', passengerController.updatePassenger);
router.delete('/deletePassenger/:id', passengerController.deletePassenger);

module.exports = router;