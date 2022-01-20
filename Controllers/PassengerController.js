const { json } = require('express/lib/response');
const passengerService = require('../Services/PassengerService');

module.exports = {
    addPassenger: (req, res) => {
        const body = req.body;
        passengerService.addPassenger(body).then(result => {
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
    },
    getAllPassenger: (req, res) => {
        passengerService.getAllPassenger().then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All Passenger Data Recived",
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

    getPassengerById: (req, res) => {
        const passenger_id = req.params.passenger_id;
        passengerService.getPassengerById(passenger_id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All Passenger Data Recived",
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
    updatePassenger: (req, res) => {
        const body = req.body;
        const passenger_id = req.params.passenger_id;
        passengerService.updatePassenger(passenger_id, body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Passenger Data Updated",
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
    deletePassenger: (req, res) => {
        const passenger_id = req.params.passenger_id;
        passengerService.deletePassenger(passenger_id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Passenger Deleted",
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