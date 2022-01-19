const passengerModel = require('../Models/PassengerModel');

module.exports = {
    addPassenger: data => {
        return passengerModel.create(data);
    },
    getAllPassenger: () => {
        return passengerModel.find();
    },
    getPassengerById: id => {
        return passengerModel.findById(id);
    },
    updatePassenger: (id, data) => {
        return passengerModel.findByIdAndUpdate(id, data);
    },
    deletePassenger: id => {
        return passengerModel.deleteOne({ _id: id });
    }
}