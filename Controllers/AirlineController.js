const airlineService = require('../Services/AirlineService');

module.exports = {

    addAirline: (req, res) => {
        /* const data = this.getAllAirline();
        if (data) {
            console.log("DATA");
        } */
        const body = req.body
        airlineService.addAirline(body).then(result => {
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
    },
    getAllAirline: (req, res) => {
        airlineService.getAllAirline().then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All Airline Data Recived",
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
    getAirlineById: (req, res) => {
        const id = parseInt(req.params.id);
        airlineService.getAirlineById(id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Airline Data Recived",
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
    updateAirline: (req, res) => {
        const body = req.body;
        const id = parseInt(req.params.id);
        airlineService.updateAirline(id, body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Airline Data Updated",
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
    deleteAirline: (req, res) => {
        const id = parseInt(req.params.id);
        airlineService.deleteAirline(id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Airline Deleted",
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