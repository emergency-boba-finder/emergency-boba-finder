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

            done(result.recordset);
        sql.close();
        })
    })

    sql.on('error', err => {
        // ... error handler
    })
}

function addInterest(interest) {
    sql.connect(config, err => {
        if (err != undefined) {
            console.log(err);
        }

        var query = `INSERT INTO [Interests] ([Name]) values ('${interest}')`;
        new sql.Request().query(query, (err, result) => {
        sql.close();
        })
    });

    sql.on('error', err => {
        // ... error handler
    })
}

function addUserInterest()

function createUser(user) {
    sql.connect(config, err => {
        // ... error checks
        if (err != undefined) {
            console.log(err);
        }
        // Query

        var query = `INSERT INTO [Users] ([FirstName], [LastName], [Location], [Distance], [Email]) VALUES ('${user.FirstName}', '${user.LastName}', '${user.Location}', '${user.Distance}', '${user.Email}');`
        new sql.Request().query(query, (err, result) => {
            // ... error checks
            sql.close();
        })
    })

    sql.on('error', err => {
        // ... error handler
    })
}

module.exports.getInterests = getInterests
module.exports.createUser = createUser
module.exports.addInterest = addInterest