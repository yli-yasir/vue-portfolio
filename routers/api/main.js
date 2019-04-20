const express = require('express');
const router = express.Router();

const projectsRouter = require('./projects.js');
const newsRouter= require('./news.js');

router.use('/projects',projectsRouter);
router.use('/news',newsRouter);

module.exports = router ;
