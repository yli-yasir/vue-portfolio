require('dotenv').config();
const express = require("express");
const app = express();
const methodOverride= require('method-override');
const apiRouter = require("./routers/api/main");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const passport = require('passport');

//---MONGO---
mongoose.connect(
  process.env.MONGO_CONNECTION_STRING,
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error!!!"));
db.once("open", () => {
  console.log("Connected to mongo!");
//require('./utils/seeder.js')
});
//---/MONGO---

app.use(cookieParser());
app.use(passport.initialize());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
require('./utils/auth.js')(passport);





//Use routers 
app.use("/api", apiRouter);

app.get("/*", (req, res, next) => {
  res.sendFile( __dirname + "/index.html")
});

var port = process.env.PORT;
 app.listen(port, () => console.log(`the app has started on port: ${port}`));
