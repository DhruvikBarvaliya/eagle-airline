const express = require('express');
const router = express.Router();
const cityController = require('../Controllers/CityController');

router.get('/', (req, res) => {
    res.send("Inside CityRouter");
});

router.post('/addCity', cityController.addCity);
router.get('/getAllCity', cityController.getAllCity);
router.get('/getCityById?:city_id', cityController.getCityById); // Query Params
router.put('/updateCity?:city_id', cityController.updateCity); // Query Params
router.delete('/deleteCity?:city_id', cityController.deleteCity); // Query Params

module.exports = router;