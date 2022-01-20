const cityModel = require('../Models/CityModel');

module.exports = {

    addCity: data => {
        return cityModel.create(data);
    },
    getAllCity: () => {
        return cityModel.find();
    },
    getCityById: city_id => {
        return cityModel.findOne(city_id);
    },
    updateCity: (city_id, body) => {
        // return airlineModel.updateOne({ city_id: city_id }, body);
        return cityModel.findOneAndUpdate(city_id, body);
    },
    deleteCity: city_id => {
        // return airlineModel.deleteOne({ city_id: city_id });
        return cityModel.findOneAndDelete(city_id);
    }
};