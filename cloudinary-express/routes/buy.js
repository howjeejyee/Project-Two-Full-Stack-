var express = require('express');
var router = express.Router();
var buyController = require('../controller/buy.js');

router.get('/', buyController.getAllProducts);

router.get('/:productId/checkout', buyController.addToCheckout);

module.exports = router;
