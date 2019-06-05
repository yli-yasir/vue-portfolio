const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');


router.post("/login", passport.authenticate("local",{session:false}), function(req, res) {
  const token = jwt.sign(req.user.toJSON(), 'mastopbotheringme');
  res.cookie('tk',token);
  res.send('k')
});

router.get("/secrets",(req,res,next)=>{
  try {
    jwt.verify(req.cookies['tk'],'mastopbotheringme')
    res.send('u got a valid token')}
  catch(e) {
    next(e)

  }
})



module.exports = router;
