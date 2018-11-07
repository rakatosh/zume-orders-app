const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Welcome! This is home page');
});

module.exports = router;
