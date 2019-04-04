const express = require("express");
const app = express();
const projectsRouter = require("./routers/projects");
const membersRouter = require("./routers/members");
const apiRouter = require("./routers/api/main");
const mongoose = require("mongoose");

//Connect to mongo
mongoose.connect(
  "mongodb+srv://Yasir:hello1234@cluster0-phxet.mongodb.net/animals?retryWrites=true",
  {useNewUrlParser: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error!!!"));
db.once("open",() => console.log("Connected to mongo..."));

//Set view engine and static files dir.
app.set("view engine", "ejs");
app.use("/public", express.static("public"));

//Use routers
app.use("/projects",projectsRouter);
app.use("/members",membersRouter);
app.use("/api",apiRouter);

app.get("/", (req, res, next) => {
  res.redirect("/home");
  
});

app.get("/home", (req, res, next) => {
  res.render("home");
});

app.listen(5000, () => console.log("The server has started!"));
