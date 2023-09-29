const express = require("express");
const router = express.Router();

//GET home page
router.get("/", (req, res, next) => {
  res.render("pages/index", { title: "Home" });
});

router.get("/about", (req, res, next) => {
  res.render("pages/about", { title: "About" });
});

router.get("/projects", (req, res, next) => {
  res.render("pages/projects", { title: "Projects" });
});
router.get("/contact", (req, res, next) => {
  res.render("pages/contact", { title: "Contact" });
});
router.get("/services", (req, res, next) => {
  res.render("pages/services", { title: "Services" });
});
module.exports = router;
