const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    try {
      req.token = jwt.verify(req.cookies['token'],process.env.SECRET);
      next();
    }
    catch(e) {
      console.log(`JWT verification failure -> ${e.message}`)
      res.end()
    }  
  }

module.exports =  {verifyToken};