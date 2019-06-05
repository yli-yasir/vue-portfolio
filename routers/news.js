const express = require("express");
const router = express.Router();
const newsModel = require("../models/news");
const restfulRouter = require("../utils/rest")

function bodyToDocument(body){
  var name = body.name;
  var description = body.description;

  return {
    name,
    description,
    date : new Date()
  };
 
}

module.exports = restfulRouter(router,newsModel,bodyToDocument);