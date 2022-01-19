const cityService = require('../Services/CityService');

module.exports = {

    addCity: (req, res) => {
        const body = req.body;
        cityService.addCity(body).then(result => {
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
    },
    getAllCity: (req, res) => {
        cityService.getAllCity().then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All City Data Recived",
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
    getCityById: (req, res) => {
        const id = parseInt(req.params.id);
        cityService.getCityById(id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "City Data Recived",
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
    updateCity: (req, res) => {
        const body = req.body;
        const id = parseInt(req.params.id);
        cityService.updateCity(id, body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "City Data Updated",
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
    deleteCity: (req, res) => {
        const id = parseInt(req.params.id);
        cityService.deleteCity(id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "City Deleted",
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