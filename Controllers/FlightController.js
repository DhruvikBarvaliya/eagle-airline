const flightService = require('../Services/FlightService')

module.exports = {

    addFlight: (req, res) => {
        const body = req.body;
        flightService.create(body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Flight Inserted",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail Inserted",
                })
            }
        })
    }


}