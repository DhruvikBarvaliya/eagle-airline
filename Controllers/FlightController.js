const flightService = require('../Services/FlightService')

module.exports = {

    addFlight: (req, res) => {
        const body = req.body;
        flightService.addFlight(body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Flight Inserted",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Insert",
                })
            }
        })
    },

    getAllFlight: (req, res) => {
        flightService.getAllFlight().then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All Flight Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Recive",
                })
            }
        })
    },

    getFlightById: (req, res) => {
        const flight_id = req.query.flight_id;
        flightService.getFlightById(flight_id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All Flight Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Recive",
                })
            }
        })
    },
    updateFlight: (req, res) => {
        const body = req.body;
        const flight_id = req.query.flight_id;
        flightService.updateFlight(flight_id, body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Flight Data Updated",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Update",
                })
            }
        })
    },
    deleteFlight: (req, res) => {
        const flight_id = req.query.flight_id;
        flightService.deleteFlight(flight_id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Flight Deleted",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Delete",
                })
            }
        })
    }
}