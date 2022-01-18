const { json } = require('express/lib/response');
const passengerService = require('../Services/PassengerService');

module.exports = {
    addPassenger: (req, res) => {
        const body = req.body;
        passengerService.create(body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Passenger Inserted",
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