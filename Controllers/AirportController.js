const airportService = require('../Services/AirportService');

module.exports = {
    addAirport: (req, res) => {
        const body = req.body;
        airportService.create(body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Airport Inserted",
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