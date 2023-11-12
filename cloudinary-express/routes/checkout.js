const express = require('express');
const router = express.Router();
const checkoutController = require('../controller/checkout.js');

router.get('/', checkoutController.displayItems);
router.post('/:itemId/delete', checkoutController.deleteItem);

module.exports = router;
