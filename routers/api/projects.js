const express = require('express');
const router = express.Router();
const projectModel = require('../../models/project')

projects = [

  {name: "Timetable Assitant",
  shortDescription: "A program to help you with your timetable",
  imgUrl: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny8wNzQvb3JpZ2luYWwvbW9ua2V5LWNvdW50aW5nLmpwZw=="},

  {name: "Timetable Assitant",
  shortDescription: "A program to help you with your timetable",
  imgUrl: "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/62012-istock-833768276.jpg?itok=AvAKdWF_&resize=1100x1100"},

  {name: "Timetable Assitant",
  shortDescription: "A program to help you with your timetable",
  imgUrl: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/29/10/pets-humans.jpg?w968h681"},

];

router.get('/',
 (req,res) => {

   projectModel.find({},(error,projects)=>{
     if (error){
       console.error("error");
     }
     res.json(projects);
   })
 }
 );

module.exports = router;
