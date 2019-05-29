const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/login", passport.authenticate("local"), function(req, res, next) {
  console.log("user authenticated");
});
router.use("/members", require("./members.js"));
router.use("/projects", require("./projects.js"));
router.use("/news", require("./news.js"));

module.exports = router;
