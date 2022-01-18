const cityService = require('../Services/CityService');

module.exports = {

    addCity: (req, res) => {
        const body = req.body;
        cityService.create(body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "City Insertes",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Insert"
                })
            }
        })
    }
}