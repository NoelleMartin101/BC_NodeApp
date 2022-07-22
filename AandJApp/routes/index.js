var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CrossFit Tracker' });
});

router.get('/createAccount', function (req, res, next) {
  res.render('createAccount', { title: 'New Account' });
});
router.get('/ViewAthleteProfile', function (req, res, next) {
  res.render('ViewAthleteProfile', { title: 'Profile' });
});
router.get('/journal', function (req, res, next) {
  res.render('journal', { title: 'Journal' });
});
router.get('/aboutUs', function (req, res, next) {
  res.render('aboutUs', { title: 'What is CrossFit' });
});
router.get('/ViewAthleteBenchmarks', function (req, res, next) {
  res.render('ViewAthleteBenchmarks', { title: 'Benchmarks' });
});

module.exports = router;
