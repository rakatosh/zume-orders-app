var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('returning orders');
});

router.post('/', function(req, res, next) {
    res.send('creating order');
});

router.put('/', function(req, res, next) {
    res.send('updating order');
});

router.delete('/', function(req, res, next) {
    res.send('deleting order');
});

module.exports = router;
