const employeeModel = require('../Models/EmployeeModel');

module.exports = {
    addEmployee: data => {
        return employeeModel.create(data);
    }
}