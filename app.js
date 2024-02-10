const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const products = require("./routes/products");

const app = express();

// const testFunc = require("./routes/routes");

// const server = http.createServer(testFunc);

// server.listen(2000);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req, res, next) => {
  res.send("<p>Function executed");
});

app.use("/product", products);

app.use("*", (req, res) => {
  res.status(404).send("<p>Page not found</p>");
});

app.listen(2000);
