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
        const employee_id = req.params.employee_id;
        employeeService.getEmployeeById(employee_id).then(result => {
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
        const employee_id = req.params.employee_id;
        employeeService.updateEmployee(employee_id, body).then(result => {
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
        const employee_id = req.params.employee_id;
        employeeService.deleteEmployee(employee_id).then(result => {
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