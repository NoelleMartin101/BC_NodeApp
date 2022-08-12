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

router.get('/privacy', function (req, res, next) {
  res.render('privacy', { title: 'Privacy' });
});



// router.post('/journalEntry_Add', async function (req, res, next) {

//   var title = 'test DB connection';//document.forms["AddEntry"]["Title"].value;
//   var details = 'test details';//document.forms["AddEntry"]["Entry"].value;

//    try {
//      const config = {
//        connectionLimit: 10,
//        host: "DESKTOP-0AH4JG6\SQLSERVER2019",
//        // user: "Abc",
//        // password: "1234",
//        database: "CrossfitTracker",
//        multipleStatements: false
//      }
    
//       async () => {
//        try {
//          // make sure that any items are correctly URL encoded in the connection string
//          await sql.connect(config)
//          const result = await sql.query`select * from DiaryEntries where DiaryEntryID = 1` 
//          //const result = await sql.query`exec DiaryEntries_Insert ${title}, ${details}`
//          console.dir(result)
//        } catch (err) {
//          // ... error checks
//        }
//       }
// }
//    catch (err) {
//      // ... error checks
//    }
//   }
// );

module.exports = router;
