const express = require('express');
const router = express.Router();

router.use('/members',require('./members.js'));
router.use('/projects',require('./projects.js'));
router.use('/news',require('./news.js'));

module.exports = router ;
