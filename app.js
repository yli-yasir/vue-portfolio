const express = require("express");
const app = express();
const mongoose = require("mongoose");

//import routers
const projectsRouter = require("./routes/projects");
const membersRouter = require("./routes/members");
const apiRouter = require("./routes/api/main");

//Connect to mongo
mongoose.connect(
  "mongodb+srv://Yasir:hello1234@cluster0-phxet.mongodb.net/animals?retryWrites=true",
  {useNewUrlParser: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error!!!"));
db.once("open",() => console.log("connected"));

//Set view engine and static files dir.
app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.use("/projects",projectsRouter);
app.use("/members",membersRouter);
app.use("/api",apiRouter);

app.get("/", (req, res, next) => {
  res.redirect("/home");
  
});

app.get("/home", (req, res, next) => {
  res.render("home/home");
});

app.get("/home/:id",(req,res,next) => {
  res.send("you requested");
})



app.listen(5000, () => console.log("The server has started!"));
