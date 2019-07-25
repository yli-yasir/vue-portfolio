const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer")();
const { verifyToken, login, grantToken } = require("../middleware/auth");

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

// router.post("/register", async (req, res, next) => {
//   try {
//     const document = await bodyToDocument(req.body);
//     await new UserModel(document).save();
//     res.status(201).send("resource created");
//   } catch (error) {
//     next(error);
//   }
// });

//verify the JWT is valid, and send the username
router.get("/login", verifyToken, function(req, res, next) {
  res.json({username: req.user._id});
});


//logs the user in
router.post("/login", multer.none(), login, grantToken);

//log the user out
router.post("/logout", function(req, res, next) {
  res.cookie("token", "", { expires: new Date() });
  res.end();
});

module.exports = router;
