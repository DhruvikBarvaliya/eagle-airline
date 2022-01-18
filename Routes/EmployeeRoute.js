const express = require('express');
const router = express.Router();
const employeeController = require('../Controllers/EmployeeController');

router.get('/', (req, res) => {
    res.send("Inside EmployeeRouter");
});

router.get('/getAllEmployee', employeeController.getAllEmployee);
router.get('/getEmployeeById/:id', employeeController.getEmployeeById);
router.post('/addEmployee', employeeController.addEmployee);
router.put('/updateEmployee/:id', employeeController.updateEmployee);
router.delete('/deleteEmployee/:id', employeeController.deleteEmployee);

module.exports = router;