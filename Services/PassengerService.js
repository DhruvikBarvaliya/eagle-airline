const passengerModel = require('../Models/PassengerModel');

module.exports = {
    create: data => {
        return passengerModel.create(data);
    }
}