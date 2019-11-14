// 'require' tells the file which libraries/files/modules are needed
const express = require("express");
const morgan = require("morgan");
const { db } = require('./models');

// importing html
const content = require("./views/layout.js");

// Invocation of express to make it run?
const app = express();

//TESTING 111




// Middleware function that serves up static files so it doesn't need to make multiple requests; 1 response per request
app.use(express.static(__dirname + "/wikistack"));

// Formats the incoming text?
app.use(express.urlencoded({extended: false}));




// When the client sends a 'get' request, expect this specific 'send' response; this is our route; if we want to reference an html file, we need to pass in
app.get('/', (req, res, next) => {
    res.send(content(''));
});




// Establishing which port the server is listening on
const PORT = 3000;

// Function that calls a method to make the server begin listening on a specific port
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});


// Console.logging a string to the node environment to demonstrate that our database is connected and the route is working
db.authenticate().
then(() => {
  console.log('connected to the database');
})
