var express = require('express');
var router = express.Router();
var signupController = require('../controller/signup.js');

router.get('/', signupController.renderSignup);
router.post('/signup', signupController.signup);

module.exports = router;
