const http = require('http');
const mssql = require('../db/mssql')
const express = require('express')

const app = express();
const port = 3001;

console.log("__dirname", __dirname);
app.use(express.static(__dirname + '../public'));
app.use(express.static(__dirname + '../src'));
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/createUser', (req, res) => {
  var user = req.query;
  mssql.createUser({"FirstName": user.FirstName, "LastName": user.LastName, "Location": user.Location, "Distance": 0, "Email": user.Email});
  res.send("Creating user");
})
app.get('/interests', (req, res) => {
  console.log("interests has been hit");
  mssql.getInterests((interests) =>  {
    console.log(interests);
    res.send(interests);
  })
})
app.get('/addInterest', (req, res) => {
  mssql.addInterest(req.query.Interest)
  res.send("Adding interest");
})
app.get('/addAvailability', (req, res) => {
  mssql.addAvailability(req.query.Availability)
  res.send("Adding Availability");
})
app.get('/getUserById', (req, res) => {
  mssql.getUserById(req.query.UserId, (user) => {
    console.log(user);
    res.send(user);
  })
})
app.get('/getUserByEmail', (req, res) => {
  mssql.getUserByEmail(req.query.Email, (user) => {
    console.log(user);
    res.send(user);
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))