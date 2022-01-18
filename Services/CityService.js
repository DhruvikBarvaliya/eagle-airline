const cityModel = require('../Models/CityModel');

module.exports = {

    create: data => {
        return cityModel.create(data);
    }
};