var ISOLATION_LEVEL = require('tedious').ISOLATION_LEVEL;
var Connection = require('tedious').Connection;

var config = {
    userName: 'NoelleMartin',
    password: 'AmsterdamApril2022',
    server: 'bc-ncirl-prj.database.windows.net',

    // If you're on Azure Data Warehouse, you will need this:
    options: {
        atabase: "BC_CrossfitTracker",
        encrypt: true,
        enableArithAbort: true,
        connectionIsolationLevel: ISOLATION_LEVEL.READ_UNCOMMITTED
    }
};

// var connection = new Connection(config);
// const { Connection, Request } = require("tedious");

// var dbCon = function a() {
//     // Create connection to database
//     const config = {
//         authentication: {
//             options: {
//                 userName: "NoelleMartin", // update me
//                 password: "AmsterdamApril2022#" // update me
//             },
//             type: "default"
//         },
//         server: "bc-ncirl-prj.database.windows.net", // update me
//         options: {
//             database: "BC_CrossfitTracker", //update me
//             encrypt: true
//         }
//     };

//     const connection = new Connection(config);

//     // // Attempt to connect and execute queries if connection goes through
//     // connection.on("connect", err => {
//     //     if (err) {
//     //         console.error(err.message);
//     //     } else {
//     //         queryDatabase();
//     //     }
//     // });

//     connection.connect();
// };
// module.exports.dbCon = dbCon;