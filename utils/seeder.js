const mongoose = require("mongoose");
const Project = require("../models/project")
const News = require('../models/news')
const Member = require('../models/member')
const User = require('../models/user');

// var catModel=  mongoose.model('cat', new mongoose.Schema({
//  name: String,
//  age: Number 
// }))


// mongoose.connection.dropCollection('projects',(err) => {
//   if (err){
//     console.log('failed to drop projects collection');
//   }
//   else{
//     console.log('projects collection dropped...')
//   }
      
// });


// mongoose.connection.dropCollection('news',(err) => {
//   if (err){
//     console.log('failed to drop news collection');
//   }
//   else{
//     console.log('news collection dropped...')
//   }
//   new News({
//     _id: "ios-game-released",
//     title:"ios game has been released",
//     description: "This program was made in JavaFx, it will help you organize your timetable!",
//     links: [{label:"android",url:"https://www.android.com/"},{label:"ios",url:"https://www.apple.com/"}],
//   }).save(function(error){if (!error){console.log("saved a dummy news")}});
  
  
//   new News({
//     _id: "timetable-asssitant-program-released",
//     title: "timetable-program-released",
//     description: "This is a game made for IOS devices, lorem ipsum ",
//     links: [{label:"ios",url:"https://www.apple.com/"}],
//   }).save(function(error){if (!error){console.log("saved a dummy news")}});
// });


// mongoose.connection.dropCollection('members',(err) => {
//   if (err){
//     console.log('failed to drop projects collection');
//   }
//   else{
//     console.log('projects collection dropped...')
//   }
      
// new Member({
//   _id: "yasir-albaldawi",
//   title:"Yasir Al-Baldawi",
//   thumbnailUrl: "https://i.imgur.com/lFpx8Zv.gif@2x.png",
//   shortDescription: "founding member of the group...",
//   description: "Programmer.... loves to write...",
// }).save(function(error){if (!error){console.log("saved a dummy member")}});


// new Member({
//   _id: "alice-smith",
//   title:"Alice Smith",
//   thumbnailUrl: "https://i.imgur.com/sUGpuiw.jpg",
//   shortDescription: "a member of the group...",
//   description: "graphics designer.... loves to draw...",
// }).save(function(error){if (!error){console.log("saved a dummy member")}});
// });


mongoose.connection.dropCollection('users',(err) => {
  if (err){
    console.log('failed to drop users collection');
  }
  else{
    console.log('users collection dropped...')
  }
  new User({
    _id: "yasir",
    password:"cats",
  }).save(function(error){if (!error){console.log("saved a dummy user")}});
  
});