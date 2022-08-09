var express = require('express');
var router = express.Router();

/* GET about page.  localhost:3000/about */
router.get('/', function(req, res, next) {
  // rendering template using pug
  res.render('about', { title: 'About us' });
});

module.exports = router;
