const flightModel = require('../Models/FlightModel');

module.exports = {
    addFlight: data => {
        return flightModel.create(data);
    },
    getAllFlight: () => {
        return flightModel.find();
    },
    getFlightById: flight_id => {
        return flightModel.findOne({flight_id:flight_id});
        // return flightModel.findOne(flight_id);
    },
    updateFlight: (flight_id, data) => {
        return flightModel.findOneAndUpdate(flight_id, data);
        // return airlineModel.updateOne({ flight_id: flight_id }, body);
    },
    deleteFlight: flight_id => {
        return flightModel.findOneAndDelete(flight_id);
        // return flightModel.deleteOne({ flight_id: flight_id });
    }
};