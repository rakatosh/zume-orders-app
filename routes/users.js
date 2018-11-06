var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('returning users');
});

router.post('/', function(req, res, next) {
    res.send('creating user');
});

router.put('/', function(req, res, next) {
    res.send('updating user');
});

router.delete('/', function(req, res, next) {
    res.send('deleting user');
});

module.exports = router;
