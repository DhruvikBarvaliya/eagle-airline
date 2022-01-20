const airportModel = require('../Models/AirportModel');

module.exports = {
    addAirport: data => {
        return airportModel.create(data);
    },
    getAllAirport: () => {
        return airportModel.find();
    },
    getAirportById: (airport_id) => {
        return airportModel.findOne(airport_id);
    },
    updateAirport: (airport_id, body) => {
        return airportModel.findOneAndUpdate(airport_id, body);
        // return airlineModel.updateOne({ airport_id: airport_id }, body);

    },
    deleteAirport: (airport_id) => {
        return airportModel.findOneAndDelete(airport_id);
        // return airlineModel.deleteOne({ airport_id: airport_id });

    }
}