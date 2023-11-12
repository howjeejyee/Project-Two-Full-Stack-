var express = require('express');
var router = express.Router();
var sellController = require('../controller/sell.js');

router.get('/', sellController.renderSell);

router.post('/add', sellController.addProduct);

module.exports = router;
