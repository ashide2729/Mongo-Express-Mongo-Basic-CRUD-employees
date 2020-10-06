const express = require('express');
const router = express.Router();
const employees = require('../schemas/employees')

router.get("/", async (req, res,) => {
    try {
        const employeesList = await employees.find();
        res.send(employeesList);
    } catch (error) {
        res.send('Error ' + error);
    }
})

router.get("/:id", async (req, res,) => {
    try {
        const employee = await employees.findById(req.params.id);
        res.send(employee);
    } catch (error) {
        res.send('Error ' + error);
    }
})

router.post("/", async (req, res,) => {
    const newEmployee = new employees({
        name: req.body.name,
        designation: req.body.designation,
        age: req.body.age
    })
    try {
        const emp = await newEmployee.save();
        res.send(emp);
    } catch (error) {
        res.send('Error ' + error);
    }
})

router.patch("/:id", async (req, res,) => {
    try {
        const employee = await employees.findById(req.params.id);
        employee.isMale = req.body.isMale;
        const emp = await employee.save();
        res.send(emp);
    } catch (error) {
        res.send('Error ' + error);
    }
})

module.exports = router