var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CrossFit Tracker' });
});

router.get('/createAccount', function (req, res, next) {
  res.render('createAccount', { title: 'New Account' });
});
router.get('/athleteProfile', function (req, res, next) {
  res.render('athleteProfile', { title: 'Profile' });
});
router.get('/journalEntries', function (req, res, next) {
  res.render('journalEntries', { title: 'Journal' });
});

router.get('/journalEntry_Add', function (req, res, next) {
  res.render('journalEntry_Add', { title: 'Add Journal Entry' });
});
router.get('/aboutUs', function (req, res, next) {
  res.render('aboutUs', { title: 'What is CrossFit' });
});
router.get('/athleteBenchmarks', function (req, res, next) {
  res.render('athleteBenchmarks', { title: 'Benchmarks' });
});

router.get('/events_current', function (req, res, next) {
  res.render('events_current', { title: 'Current Event WODs' });
});
router.get('/events_previous', function (req, res, next) {
  res.render('events_previous', { title: 'Previous Event WODs' });
});

router.get('/submitScore', function (req, res, next) {
  res.render('submitScore', { title: 'Submit Score' });
});
module.exports = router;
