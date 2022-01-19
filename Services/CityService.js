const cityModel = require('../Models/CityModel');

module.exports = {

    addCity: data => {
        return cityModel.create(data);
    },
    getAllCity: () => {
        return cityModel.find();
    },
    getCityById: id => {
        return cityModel.findById(id);
    },
    updateCity: (id, body) => {
        return cityModel.findByIdAndUpdate(id, body);
    },
    deleteCity: id => {
        return cityModel.findByIdAndDelete({ _id: id });
    }
};