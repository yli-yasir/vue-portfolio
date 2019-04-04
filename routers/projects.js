const express = require('express');
const router = express.Router();



router.get('/', (req, res, send) => {
  res.render("projects");
});

module.exports = router;
