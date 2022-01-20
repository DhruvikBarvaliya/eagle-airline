const passengerModel = require('../Models/PassengerModel');

module.exports = {
    addPassenger: data => {
        return passengerModel.create(data);
    },
    getAllPassenger: () => {
        return passengerModel.find();
    },
    getPassengerById: passenger_id => {
        return passengerModel.find(passenger_id);
    },
    updatePassenger: (passenger_id, data) => {
        // return airlineModel.updateOne({ passenger_id: passenger_id }, body);
        return passengerModel.findByIdAndUpdate(passenger_id, data);
    },
    deletePassenger: passenger_id => {
        // return passengerModel.deleteOne({ passenger_id: passenger_id });
        return passengerModel.findOneAndDelete(passenger_id);
    }
}