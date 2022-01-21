const airlineModel = require('../Models/AirlineModel');

module.exports = {
    addAirline: data => {
        return airlineModel.create(data);
    },
    getAllAirline: () => {
        return airlineModel.find();
    },
    getAirlineById: airline_id => {
        return airlineModel.findOne({ airline_id: airline_id });
        // return airlineModel.findById(airline_id);
    },
    updateAirline: (airline_id, body) => {
        return airlineModel.updateOne({ airline_id: airline_id }, body);
        // return airlineModel.findOneAndUpdate(airline_id, body);
    },
    deleteAirline: airline_id => {
        return airlineModel.deleteOne({ airline_id: airline_id });
        // return airlineModel.findOneAndDelete(airline_id);
    }
};