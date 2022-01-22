const express = require('express');
const router = express.Router();
const airlineRouter = require('./AirlineRoute');
const airportRouter = require('./AirportRoute');
const bookingRouter = require('./BookingRoute');
const cityRouter = require('./CityRoute');
const employeeRouter = require('./EmployeeRoute');
const flightRouter = require('./FlightRoute');
const passengerRouter = require('./PassengerRoute');

/* router.get('/', (req, res) => {
    res.send('Welcome to Eagle Airline');
}); */

router.get('/', (req, res) => {
    return res.redirect('Home.html')
})

router.use('/api',
    airlineRouter,
    airportRouter,
    bookingRouter,
    cityRouter,
    employeeRouter,
    flightRouter,
    passengerRouter
);

module.exports = router;