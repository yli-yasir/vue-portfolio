const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const multer = require('multer')();
const {verifyToken} = require('../config/rest');

async function bodyToDocument(body) {
  const _id = body.username;
  try {
    const password = await bcrypt.hash(body.password, 10);
    return {
      _id,
      password
    };
  } catch (error) {
    next(error);
  }
}

// //todo remove this
// router.get("/", async (req, res, next) => {
//     try {
//       let result = await UserModel.find({}).exec();
//       res.json(result);
//     } catch (error) {
//       next(error);
//     }
//   });

router.post("/register", async (req, res, next) => {
  try {
    const document = await bodyToDocument(req.body);
    await new UserModel(document).save();
    res.status(201).send("resource created");
  } catch (error) {
    next(error);
  }
});

router.get("/login",verifyToken,function(req,res,next){
  res.send(req.token._id);
})
//logs the user in
router.post(
  "/login",multer.none(),
  passport.authenticate("local", { session: false }),
  function(req, res) {
    const token = jwt.sign(req.user.toJSON(), process.env.SECRET,{expiresIn: 60 * 30});
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.SECURE_COOKIE === 'true' ? true : false
    });
    res.send(req.body.username);
    console.log('Granted token...')
  }
);

module.exports = router;
