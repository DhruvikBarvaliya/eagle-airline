const airlineModel = require('../Models/AirlineModel');

module.exports = {
    create: data => {
        return airlineModel.create(data);
    }
};