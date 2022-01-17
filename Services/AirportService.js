const airportModel = require('../Models/AirportModel');

module.exports = {
    create: data => {
        return airportModel.create(data);
    }
}