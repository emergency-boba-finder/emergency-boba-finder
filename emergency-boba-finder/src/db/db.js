var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config =
{
    authentication: {
        options: {
            userName: 'shuotian', // update me
            password: '***REMOVED***' // update me
        },
        type: 'default'
    },
    server: 'emergencybobafinder.database.windows.net', // update me
    options:
    {
        database: 'EmergencyBobaFinder', //update me
        encrypt: true,
        rowCollectionOnRequestCompletion: true
    }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err)
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
            function done(interests) {
                console.log(interests);
            }
            getInterests(done);
        }
    }
);

function exec(sql) {
    
}

function createUser(user) {
    connection.on('connect', function(err) {
        if (err) {
            console.log(err);
        }
        else {
            var query = `INSERT INTO [Users] ([FirstName], [LastName], [Location], [Distance]) VALUES ('${user.FirstName}', '${user.LastName}', '${user.Location}', '${user.Distance}');`
            var request = new Request(
                query,
                function(err, rowCount, rows) {
                    console.log(rowCount + ' row(s) returned')
                }
                );
            
            connection.execSql(request);
        }
    });
}

function getInterests(done) {
    connection.on('connect', function(err)
    {
        if (err) {
            console.log(err);
        }
        else {
            var interests = [];

            var request = new Request(
                "SELECT [InterestId], [Name] from [Interests]"
                ,
                function(err, rowCount, rows)
                {
                    console.log(rowCount + ' row(s) returned');
                    rows.forEach(function(row) {
                        interests.push({"InterestId": row[0].value, "Name": row[1].value})
                    });
        
                    done(interests);
                    process.exit();
                }
            );
        
            connection.execSql(request);
        }
    });
}



function queryDatabase()
{
    console.log('Reading rows from the Table...');

    // Read all rows from table
    var request = new Request(
        "SELECT * FROM Interests",
        function(err, rowCount, rows)
        {
            console.log(rowCount + ' row(s) returned');
            process.exit();
        }
    );

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
}

module.exports.getInterests = getInterests
module.exports.createUser = createUser