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

function diaryEntries_Insert()
{
    const connection = new Connection(config);

    var title = document.forms["AddEntry"]["Title"].value;
    var entry = document.forms["AddEntry"]["Entry"].value;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryDatabase(title, entry);
        }
    });
}

function queryDatabase(title, entry) {
    
    // Read all rows from table
    const request = new Request(
        `Exec DiaryEntries_Insert(title, entry)`,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
        }
    );

    request.on("row", columns => {
        columns.forEach(column => {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });

    connection.execSql(request);
}