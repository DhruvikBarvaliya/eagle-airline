const flightModel = require('../Models/FlightModel');

module.exports = {
    addFlight: data => {
        return flightModel.create(data);
    },

    getAllFlight: () => {
        return flightModel.find();
    },

    getFlightById: id => {
        return flightModel.findById(id);
    },
    updateFlight: (id, data) => {
        return flightModel.findByIdAndUpdate(id, data);
    },
    deleteFlight: id => {
        return flightModel.deleteOne({ _id: id });
    }
};