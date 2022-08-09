var express = require('express');
var router = express.Router();

/* GET home page.  localhost:3000/ */
router.get('/', function(req, res, next) {
  // rendering template using pug
  res.render('index', { title: 'REST API of Employee Management App v1' });
});

module.exports = router;
