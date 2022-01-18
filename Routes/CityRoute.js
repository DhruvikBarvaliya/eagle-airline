const express = require('express');
const router = express.Router();
const cityController = require('../Controllers/CityController');

router.get('/', (req, res) => {
    res.send("Inside CityRouter");
});

router.get('/getAllCity', cityController.getAllCity);
router.get('/getCityById/:id', cityController.getCityById);
router.post('/addCity', cityController.addCity);
router.put('/updateCity/:id', cityController.updateCity);
router.delete('/deleteCity/:id', cityController.deleteCity);

module.exports = router;