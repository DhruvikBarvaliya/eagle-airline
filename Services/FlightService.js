const flightModel = require('../Models/FlightModel');

module.exports = {
    create: data => {
        return flightModel.create(data);
    }
};