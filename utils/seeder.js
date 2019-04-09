const mongoose = require("mongoose");
const Project = require("../models/project")

new Project({
  name: "Timetable Assistant",
  thumbnailUrl: "https://www.any.do/v4/images/assistant/assistant@2x.png",
  shortDescription: "This program will help you organize your timetable!",
  description: "This program was made in JavaFx, it will help you organize your timetable!",
  youtubeEmbed: "https://www.youtube.com/embed/jw2etItmQjk?list=RDjw2etItmQjk",
  imgUrls: ["https://i.imgur.com/amCdfuY.jpg","https://i.imgur.com/5skWNZ0.jpg"],
  links: [{label:"android",url:"https://www.android.com/"},{label:"ios",url:"https://www.apple.com/"}],
  hi: "hello"
}).save(function(error){if (!error){console.log("saved dummy project")}});

