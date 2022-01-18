const employeeService = require('../Services/EmployeeService');

module.exports = {

    addEmployee: (req, res) => {
        const body = req.body;
        employeeService.create(body).then(result => {
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
    }
}