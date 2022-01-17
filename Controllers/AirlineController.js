const airlineService = require('../Services/AirlineService');

module.exports = {

    addAirline: (req, res) => {
        const body = req.body
        airlineService.create(body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Airline Inserted",
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