const express = require('express');
const router = express.Router();
const cityController = require('../Controllers/CityController');

router.get('/', (req, res) => {
    res.send("Inside CityRouter");
});

router.post('/addCity', cityController.addCity);

module.exports = router;