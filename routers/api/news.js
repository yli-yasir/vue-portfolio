const express = require("express");
const router = express.Router();
const newsModel = require("../../models/news");

router.get("/", async (req, res) => {
  try {
    let result = await newsModel.find({}).exec();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;