const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send(`Returning orders`);
});

router.post('/', function(req, res) {
    res.send(`Creating order`);
});

router.put('/:orderId', function(req, res) {
    res.send(`Updating order ${req.params.orderId}`);
});

router.delete('/:orderId', function(req, res) {
    res.send(`Deleting order ${req.params.orderId}`);
});

module.exports = router;
