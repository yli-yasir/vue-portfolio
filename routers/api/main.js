const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/login", passport.authenticate("local"), function(req, res) {
  console.log("usesr authenticated");
});
router.use("/members", require("./members.js"));
router.use("/projects", require("./projects.js"));
router.use("/news", require("./news.js"));

module.exports = router;
