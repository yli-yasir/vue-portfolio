const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    try {
      req.token = jwt.verify(req.cookies['token'],process.env.SECRET);
      next();
    }
    catch(e) {
      next(e)
    }  
  }

module.exports =  {verifyToken};