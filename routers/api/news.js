const express = require("express");
const router = express.Router();
const newsModel = require("../../models/news");
const restfulRouter = require("../../utils/rest")

function bodyToDocument(body){
  var name = body.name;
  var description = body.description;
  var date = body.date

  return {
    name,
    description,
    date
  };
 
}

module.exports = restfulRouter(router,newsModel,bodyToDocument);