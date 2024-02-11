// const http = require("http");
// const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const products = require("./route/products");
const admin = require("./route/admin");
const path = require("path");
const app = express();

// const testFunc = require("./routes/routes");
app.use(express.static(path.join(__dirname, "public")));
// const server = http.createServer(testFunc);

// server.listen(2000);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("<p>Home page redirect</p>");
});

app.use("/admin", admin);

app.use("/product", products);

app.use("*", (req, res) => {
  res.status(404).send("<p>Page not found</p>");
});

app.listen(2000);
