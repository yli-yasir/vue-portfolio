const express = require("express");
const server = express();
const apiRouter = require("./routers/api/main");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//---MONGO---
mongoose.connect(
  "mongodb+srv://Yasir:hello1234@cluster0-phxet.mongodb.net/soulera2?retryWrites=true",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error!!!"));
db.once("open", () => {
  console.log("Connected to mongo...");
  //require('./utils/seeder.js')
});
//---/MONGO---


server.use(bodyParser.urlencoded({ extended: true }));

server.use("/public", express.static("public"));

//Use routers
server.use("/api", apiRouter);

server.get("/*", (req, res, next) => {
  res.sendFile( __dirname + "/index.html")
});

var port = process.env.PORT || 5000;

server.listen(port, () => console.log(`the server has started on port: ${port}`));
