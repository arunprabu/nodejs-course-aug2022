var express = require('express');
const { signup, login } = require('../../controllers/auth.controller');
var router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

module.exports = router;