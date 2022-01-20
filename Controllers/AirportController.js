const airportService = require('../Services/AirportService');

module.exports = {
    addAirport: (req, res) => {
        const body = req.body;
        airportService.addAirport(body).then(result => {
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
    },
    getAllAirport: (req, res) => {
        airportService.getAllAirport().then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All Airport Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail to Recive"
                })
            }
        })

    },
    getAirportById: (req, res) => {
        const airport_id = req.params.airport_id;
        airportService.getAirportById(airport_id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Airport Data Recived",
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
    updateAirport: (req, res) => {
        const body = req.body;
        const airport_id = req.query.airport_id;
        // const airport_id = req.params.airport_id;
        airportService.updateAirport(airport_id, body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Airport Data Updated",
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
    deleteAirport: (req, res) => {
        const airport_id = req.params.airline_id;
        airportService.deleteAirport(airport_id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Airport Deleted",
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