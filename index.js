const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  var age = Number(request.body.n1) / 15;
  response.send("Your age in dog years is : " + age + " dog years!");
});

app.get("/aboutus", function (request, response) {
  response.send("<h1>This is about me</h1>");
});

app.get("/contactus", function (request, response) {
  response.send("<p> This is my contact no.</p>");
});

app.get("/home", function (request, response) {
  response.send("<p> This is my home</p>");
});

app.listen(port);
