const http = require('http');
const mssql = require('../db/mssql')
const express = require('express')

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
//   function done(interests) {
//     console.log(interests);
//   }
//   // db.getInterests(done);
//   //db.createUser({"FirstName": "Derp", "LastName": "Herp", "Location": "Derpville", "Distance": 0});
//   var interests = mssql.getInterests(done);
//   mssql.createUser({"FirstName": "Derp", "LastName": "Herp", "Location": "Derpville", "Distance": 0});
//   console.log(interests)
// });


const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/createUser', (req, res) => {
  var user = req.query;
  mssql.createUser({"FirstName": user.FirstName, "LastName": user.LastName, "Location": user.Location, "Distance": 0});
  res.send("Creating user");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))