var express = require('express');
var router = express.Router();

/* CRUD App 
  1. Create Employee - /api/employees - POST
  2. List Employees  - /api/employees - GET
  3. Get Employee Details /api/employees/1 - GET 
  4. Update Employee
  5. Delete Employee (TODO)
*/

/* POST create employee. /api/employees */
router.post('/', (req, res, next) => {
  console.log(req);
  res.status(201).json({
    id: 999,
    ...req.body   
  });
});

/* GET employees listing. /api/employees */
router.get('/', (req, res, next) => {
  const employees = [{
    id: 1,
    name: 'John',
    phone: 32322324,
    email: 'j@k.com'
  }, {
    id: 2,
    name: 'Steve',
    phone: 5668887,
    email: 's@t.com'
  }];
  res.json(employees);
});

/* GET employee details. /api/employees/:id */
router.get('/:id', (req, res, next) => { // id is the URL Param
  console.log(req.url);
  console.log(req.params); // URL Param can be found inside
  // console.log(req.query); // query params
  res.json({
    id: req.params.id,
    name: 'John',
    phone: 32322324,
    email: 'j@k.com'
  });
});

router.put('/:id', (req, res, next) => {
  console.log(req.url);
  console.log(req.params); // URL Param can be found inside
  console.log(req.body);

  res.status(201).json({
    status: 'Updated Successfully'
  });
});

// TODO: handle delete employee







module.exports = router;
