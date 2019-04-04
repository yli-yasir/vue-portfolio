const express = require('express');
const router = express.Router();

router.get('/', (req, res, send) => res.render("members"));

module.exports = router;
