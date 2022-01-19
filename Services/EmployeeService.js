const employeeModel = require('../Models/EmployeeModel');

module.exports = {
    addEmployee: data => {
        return employeeModel.create(data);
    },
    getAllEmployee: () => {
        return employeeModel.find();
    },
    getEmployeeById: id => {
        return employeeModel.findById(id);
    },
    updateEmployee: (id, data) => {
        return employeeModel.findByIdAndUpdate(id, data);
    },
    deleteEmployee: id => {
        return employeeModel.deleteOne({ _id: id });
    }
}