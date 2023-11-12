var express = require('express');
var router = express.Router();
var indexController = require('../controller/index.js');
var auth = require('../middleware/auth');

router.use(auth);
router.get('/', indexController.renderHome);

module.exports = router;

