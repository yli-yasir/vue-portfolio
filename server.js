require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require("passport");

//---MONGO---
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error!!!"));
db.once("open", () => {
  console.log("Connected to mongo!");
  //require('./utils/seeder.js')
});
//---/MONGO---

app.use(helmet());
app.use(cookieParser());
app.use(passport.initialize());
require("./config/passport.js")(passport);
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

//Use routers
app.use("/api/members", require("./routers/members.js"));
app.use("/api/projects", require("./routers/projects.js"));
app.use("/api/news", require("./routers/news.js"));
app.use("/api/users", require("./routers/users.js"));

//todo change this when you are done with the front end
app.get("/*", (req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT, () =>
  console.log("the app has started on port:" + process.env.PORT)
);
