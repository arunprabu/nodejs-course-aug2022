var express = require('express');
const { body } = require('express-validator');
const { createEmployee, getEmployees, getEmployeeById, updateEmployee } = require('../../controllers/employees.controller');
const auth = require('../../utils/auth');

var router = express.Router();

/* CRUD App 
  1. Create Employee - /api/employees - POST
  2. List Employees  - /api/employees - GET
  3. Get Employee Details /api/employees/1 - GET 
  4. Update Employee
  5. Delete Employee (TODO)
*/

/* POST create employee. /api/employees */
router.post(
  '/', 
  body('name').isLength({min:2}),
  body('email').isEmail(),
  createEmployee
);

/* GET employees listing. /api/employees */
router.get('/', auth.required, getEmployees);

/* GET employee details. /api/employees/:id */
router.get('/:id', auth.optional, getEmployeeById);

router.put('/:id', updateEmployee);

// TODO: handle delete employee

module.exports = router;
