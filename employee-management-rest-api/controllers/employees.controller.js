/* CRUD App 
  1. Create Employee fn 
  2. List Employees fn 
  3. Get Employee Details fn  
  4. Update Employee fn 
  5. Delete Employee (TODO)
*/

const { validationResult } = require('express-validator');
const Employee = require('../models/employees.model');

exports.createEmployee = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req);
  /* Let's work on to save the req.body in DB */
  console.log(req.body);

  // do the validation
  const employeeDao = new Employee(req.body);
  employeeDao.save( (err, data) => {
    if(!err){
      console.log(data);
      res.json(data);
    }else{ 
      console.log(err);
      res.json(err);
    }
  });
}

exports.getEmployees = (req, res) => {
  console.log(req);
  Employee.find({}, (err, data) => {
    if(!err){
      console.log(data);
      res.json(data);
    }else{ 
      console.log(err);
      res.json(err);
    }
  });
}

exports.getEmployeeById = (req, res) => {
  console.log(req);
  Employee.findOne({_id: req.params.id}, (err, data) => {
    if(!err){
      console.log(data);
      res.json(data);
    }else{ 
      console.log(err);
      res.json(err);
    }
  });
}

exports.updateEmployee = (req, res) => {
  console.log(req);

  Employee.updateOne({_id: req.params.id}, req.body, (err, data) => {
    if(!err){
      console.log(data);
      res.json(data);
    }else{ 
      console.log(err);
      res.json(err);
    }
  })
}

// TODO: Delete Employee


