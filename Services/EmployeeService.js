const employeeModel = require('../Models/EmployeeModel');

module.exports = {
    addEmployee: data => {
        return employeeModel.create(data);
    },
    getAllEmployee: () => {
        return emoloyeeModel.find();
    },
    getEmployeeById: id => {
        return emoloyeeModel.findById(id);
    },
    updateEmployee: (id, data) => {
        return emoloyeeModel.findByIdAndUpdate(id, data);
    },
    deleteEmployee: id => {
        return emoloyeeModel.deleteOne({ _id: id });
    }
}