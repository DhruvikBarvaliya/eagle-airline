const express = require('express');
const router = express.Router();
const employeeController = require('../Controllers/EmployeeController');

router.get('/', (req, res) => {
    res.send("Inside EmployeeRouter");
});

router.post("/addEmployee", employeeController.addEmployee)

module.exports = router;