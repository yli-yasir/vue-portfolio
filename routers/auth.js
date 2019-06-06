const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');




router.get("/secrets",(req,res,next)=>{
  try {
    jwt.verify(req.cookies['token'],process.env.SECRET)
    res.send('u got a valid token')}
  catch(e) {
    next(e)

  }
})



module.exports = router;
