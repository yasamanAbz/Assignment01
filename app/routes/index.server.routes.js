const express = require("express");
const router = express.Router();

//GET home page
router.get("/", (req, res, next) => {
  res.render("index", { title: "Home" });
});

router.get("/about", (req, res, next) => {
  res.render("about", { title: "About" });
});

router.get("/projects", (req, res, next) => {
  res.render("projects", { title: "Projects" });
});
router.get("/contact", (req, res, next) => {
  res.render("contact", { title: "Contact" });
});
router.get("/services", (req, res, next) => {
  res.render("services", { title: "Services" });
});
module.exports = router;
