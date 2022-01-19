const employeeService = require('../Services/EmployeeService');

module.exports = {

    addEmployee: (req, res) => {
        const body = req.body;
        employeeService.addEmployee(body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Employee Inserted",
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
    getAllEmployee: (req, res) => {
        employeeService.getAllEmployee().then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All Emoloyee Data Recived",
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

    getEmployeeById: (req, res) => {
        const id = parseInt(req.params.id);
        employeeService.getEmployeeById(id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "All Emoloyee Data Recived",
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
    updateEmployee: (req, res) => {
        const body = req.body;
        const id = parseInt(req.params.id)
        employeeService.updateEmployee(id, body).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Emoloyee Data Updated",
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
    deleteEmployee: (req, res) => {
        const id = parseInt(req.params.id);
        employeeService.deleteEmployee(id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Emoloyee Deleted",
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