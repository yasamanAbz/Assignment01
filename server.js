process.env.NODE_ENV = process.env.NODE_ENV || "development";
const express = require("./config/express");
const app = express();
app.listen(8080);
module.exports = app;
console.log("Server running at http://localhost:8080/");
