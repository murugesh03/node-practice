const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();

// const testFunc = require("./routes/routes");

// const server = http.createServer(testFunc);

// server.listen(2000);

app.get("/test", (req, res, next) => {
  res.send("<p>Function executed");
});

app.get("/", (req, res, next) => {
  res.send(
    "<form method='POST' action='/test'><input name='name'> <button type='submit'>Send</button> </form>"
  );
});
app.listen(2000);
