const sql = require('mssql')

const config = {
    user: '',
    password: '',
    server: 'emergencybobafinder.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'EmergencyBobaFinder',
    options: {
        encrypt: true
    }
}

function getInterests(done) {
    sql.connect(config, err => {
        // ... error checks
        if (err != undefined) {
            console.log(err);
        }
        // Query

        new sql.Request().query('SELECT * FROM Interests', (err, result) => {
            // ... error checks

            done(result);
        })
    })

    sql.on('error', err => {
        // ... error handler
    })
}

function createUser(user) {
    sql.connect(config, err => {
        // ... error checks
        if (err != undefined) {
            console.log(err);
        }
        // Query

        var query = `INSERT INTO [Users] ([FirstName], [LastName], [Location], [Distance]) VALUES ('${user.FirstName}', '${user.LastName}', '${user.Location}', '${user.Distance}');`
        new sql.Request().query(query, (err, result) => {
            // ... error checks
        })
    })

    sql.on('error', err => {
        // ... error handler
    })
}

module.exports.getInterests = getInterests
module.exports.createUser = createUser