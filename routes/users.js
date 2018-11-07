const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send(`Returning users`);
});

router.post('/', function(req, res) {
    res.send(`Creating user`);
});

router.put('/:userId', function(req, res) {
    res.send(`Updating user ${req.params.userId}`);
});

router.delete('/:userId', function(req, res) {
    res.send(`Deleting user ${req.params.userId}`);
});

module.exports = router;
