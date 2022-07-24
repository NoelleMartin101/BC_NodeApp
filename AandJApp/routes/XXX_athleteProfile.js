var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('athleteProfile', { title: 'Profile' });
});
/* GET home page. */
router.get('/athleteBenchmarks', function (req, res, next) {
    res.render('athleteBenchmarks', { title: 'Benchmarks' });
});
/* GET home page. */
router.get('/events_current', function (req, res, next) {
    res.render('events_current', { title: 'Current Event WODs' });
});
module.exports = router;