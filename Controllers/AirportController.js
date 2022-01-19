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
        const id = parseInt(req.params.id);
        airportService.getAirportById(id).then(result => {
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
        const id = parseInt(req.params.id);
        airportService.updateAirport(id, body).then(result => {
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
        const id = parseInt(req.params.id);
        airportService.deleteAirport(id).then(result => {
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