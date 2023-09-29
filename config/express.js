const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const compress = require("compression");

module.exports = () => {
  const app = express();
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.set("views", "./app/views/");
  app.set("view engine", "ejs");
  // require("../app/routes/index.server.routes.js")(app);
  app.use("/", require("../app/routes/index.server.routes.js"));

  app.use(express.static("./public"));
  app.use(express.static("./node_modules"));
  return app;
};
