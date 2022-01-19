const airportModel = require('../Models/AirportModel');

module.exports = {
    addAirport: data => {
        return airportModel.create(data);
    },
    getAllAirport: () => {
        return airportModel.find();
    },
    getAirportById: (id) => {
        return airportModel.findById(id);
    },
    updateAirport: (id, body) => {
        return airportModel.findByIdAndUpdate(id, body);
    },
    deleteAirport: (id) => {
        return airportModel.findByIdAndDelete({ _id: id });
    }
}