
const { Connection, Request } = require("tedious");

// Create connection to database
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

/* 
    //Use Azure VM Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        authentication: {
            type: 'azure-active-directory-msi-vm',
        },
        options: {
            database: process.env["db_database"],
            encrypt: true,
            port: 1433
        }
    };
    //Use Azure App Service Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        authentication: {
            type: 'azure-active-directory-msi-app-service',
        },
        options: {
            database: process.env["db_database"],
            encrypt: true,
            port: 1433
        }
    });
*/

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
    if (err) {
        console.error(err.message);
    } else {
        queryDatabase();
    }
});

connection.connect();

function queryDatabase() {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(
        `Exec Countries_ViewAll`,
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