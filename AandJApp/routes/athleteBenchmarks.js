var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('athleteBenchmarks', { title: 'View Athlete Benchmarks' });
});

module.exports = router;