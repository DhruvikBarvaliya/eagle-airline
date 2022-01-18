const airlineModel = require('../Models/AirlineModel');

module.exports = {
    addAirline: data => {
        return airlineModel.create(data);
    },
    getAllAirline: () => {
        return airlineModel.find();
    },
    getAirlineById: id => {
        return airlineModel.findById(id);
    },
    updateAirline: (id, body) => {
        return airlineModel.findByIdAndUpdate(id, body);
    },
    deleteAirline: id => {
        return airlineModel.findByIdAndDelete({ _id: id });
    }
};