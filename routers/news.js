const express = require("express");
const router = express.Router();
const newsModel = require("../models/news");
const {restfulRouter} = require("../config/rest");
const nameToId = require("../utils/commons").nameToId;

function bodyToDocument(body){
  const name = body.title;
  const _id = nameToId(name)
  const description = body.description;
  const thumbnailUrl = body.thumbnailUrl;

  return {
    _id,
    name,
    description,
    thumbnailUrl
  };
 
}

module.exports = restfulRouter(router,newsModel,bodyToDocument);