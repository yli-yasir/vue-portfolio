const express = require("express");
const app = express();
const session = require("express-session");
const methodOverride= require('method-override');
const apiRouter = require("./routers/api/main");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require('passport');

//---MONGO---
mongoose.connect(
  "mongodb+srv://Yasir:hello1234@cluster0-phxet.mongodb.net/soulera2?retryWrites=true",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error!!!"));
db.once("open", () => {
  console.log("Connected to mongo...");
  require('./utils/seeder.js')
});
//---/MONGO---
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))


app.use(passport.initialize());
app.use(passport.session());

require('./utils/auth.js')(passport);



 app.use(methodOverride('_method'));

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use("/public", express.static("public"));

//Use routers 
app.use("/api", apiRouter);

app.get("/*", (req, res, next) => {
  res.sendFile( __dirname + "/index.html")
});

var port = process.env.PORT || 5000;
 app.listen(port, () => console.log(`the app has started on port: ${port}`));
