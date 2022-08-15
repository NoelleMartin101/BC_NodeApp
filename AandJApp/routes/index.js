var express = require('express');
var router = express.Router();

var sql = require("mssql");

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

router.get('/aboutUs', function (req, res, next) {
  res.render('aboutUs', { title: 'What is CrossFit' });
});
router.get('/athleteBenchmarks', function (req, res, next) {
  res.render('athleteBenchmarks', { title: 'Benchmarks' });
});

router.get('/journalEntry_Add', function (req, res, next) {
  res.render('journalEntry_Add', { title: 'Add Journal Entry' });
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


router.post('/journalEntry_Add', async function (req, res, next) {

  var title = req.body.Title; 
  var details = req.body.Entry;
  
  try {
    const config = {
      authentication: {
        options: {

          userName: "NoelleMartin", // update me
          password: "AmsterdamApril2022#" // update me            
        },
        type: "default"
      },
      server: "bc-ncirl-prj.database.windows.net", // update me
      options: {
        database: "BC_CrossfitTracker", //update me
        encrypt: true,
        trustServerCertificate: false
      }
    };

    try {
      await sql.connect(config)      
      const result = await sql.query`exec DiaryEntries_Insert ${title}, ${details}`
         
    } 
    catch (err) {

      console.log(err)
    }
  }
  catch (err) {
    console.log(err)
  }
}
);

router.post('/registerNewUser', async function (req, res, next) {

  console.log("here")

  var username = req.body.userName;
  var email = req.body.Email;
  var password = req.body.Password;

  console.log(username)
  console.log(email)
  console.log(password)
  try {
    const config = {
      authentication: {
        options: {

          userName: "NoelleMartin", // update me
          password: "AmsterdamApril2022#" // update me            
        },
        type: "default"
      },
      server: "bc-ncirl-prj.database.windows.net", // update me
      options: {
        database: "BC_CrossfitTracker", //update me
        encrypt: true,
        trustServerCertificate: false
      }
    };

    try {
      await sql.connect(config)
      const result = await sql.query`exec UserCredentials_Insert ${username}, ${email}, ${password}`

      console.log(result)
    }
    catch (err) {

      console.log(err)
    }
  }
  catch (err) {
    console.log(err)
  }
}
);



module.exports = router;
