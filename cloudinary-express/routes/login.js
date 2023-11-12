var express = require('express');
var router = express.Router();
var loginController = require('../controller/login.js');

router.get('/', loginController.renderLogin);
router.post('/login', loginController.login);

module.exports = router;