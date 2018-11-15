const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    console.log(process.env);
    res.send(`Welcome! This is home page. Host name ${process.env.HOSTNAME}`);
});

module.exports = router;
