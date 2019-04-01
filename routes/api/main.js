const express = require('express');
const router = express.Router();

const projectsAPIRouter = require('./projects.js')

router.use('/projects',projectsAPIRouter);

module.exports = router ;
