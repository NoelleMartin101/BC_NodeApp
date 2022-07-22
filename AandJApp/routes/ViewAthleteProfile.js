var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('ViewAthleteProfile', { title: 'View Athlete Profile' });
});
/* GET home page. */
router.get('/ViewAthleteBenchmarks', function (req, res, next) {
    res.render('ViewAthleteBenchmarks', { title: 'View Athlete Benchmarks' });
});
module.exports = router;