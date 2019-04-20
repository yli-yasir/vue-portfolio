const mongoose = require("mongoose");
const Project = require("../models/project")
const News = require('../models/news')

mongoose.connection.dropCollection('projects',(err) => {
  if (err){
    console.log('failed to drop projects collection');
  }
  else{
    console.log('projects collection dropped...')
  }
      
new Project({
  _id: "Timetable-Assistant",
  title:"Timetable Assistant",
  thumbnailUrl: "https://www.any.do/v4/images/assistant/assistant@2x.png",
  shortDescription: "This program will help you organize your timetable!",
  description: "This program was made in JavaFx, it will help you organize your timetable!",
  youtubeEmbed: "https://www.youtube.com/embed/jw2etItmQjk?list=RDjw2etItmQjk",
  imgUrls: ["https://i.imgur.com/amCdfuY.jpg","https://i.imgur.com/5skWNZ0.jpg"],
  links: [{label:"android",url:"https://www.android.com/"},{label:"ios",url:"https://www.apple.com/"}],
  contributers: [{name: 'mike', role: 'artist'},{name: 'sky', role: 'developer'}]
}).save(function(error){if (!error){console.log("saved a dummy project")}});


new Project({
  _id: "ios-game",
  title: "ios game",
  thumbnailUrl: "https://cdn.cultofmac.com/wp-content/uploads/2015/12/Mavenfall.jpg",
  shortDescription: "Enjoy this fun game for apple devices",
  description: "This is a game made for IOS devices, lorem ipsum ",
  youtubeEmbed: "https://www.youtube.com/embed/jw2etItmQjk?list=RDjw2etItmQjk",
  imgUrls: ["https://cdn.cultofmac.com/wp-content/uploads/2015/12/Mavenfall.jpg"],
  links: [{label:"ios",url:"https://www.apple.com/"}],
  contributers: [{name: 'dark', role: 'graphic design'},{name: 'myop', role: 'programming in swift'}]
}).save(function(error){if (!error){console.log("saved a dummy project")}});
});


mongoose.connection.dropCollection('news',(err) => {
  if (err){
    console.log('failed to drop news collection');
  }
  else{
    console.log('news collection dropped...')
  }
  new News({
    _id: "ios-game-released",
    title:"ios game has been released",
    description: "This program was made in JavaFx, it will help you organize your timetable!",
    links: [{label:"android",url:"https://www.android.com/"},{label:"ios",url:"https://www.apple.com/"}],
  }).save(function(error){if (!error){console.log("saved a dummy news")}});
  
  
  new News({
    _id: "timetable-asssitant-program-released",
    title: "timetable-program-released",
    description: "This is a game made for IOS devices, lorem ipsum ",
    links: [{label:"ios",url:"https://www.apple.com/"}],
  }).save(function(error){if (!error){console.log("saved a dummy news")}});
});


