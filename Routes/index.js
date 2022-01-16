const express = require('express');
const router = express.Router();
const flightRouter = require('./FlightRoute');

router.get('/', (req, res) => {
    res.send('Welcome to Eagle Airline');   
});

router.use('/api', flightRouter);

module.exports = router;