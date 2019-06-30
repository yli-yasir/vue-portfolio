const jwt = require('jsonwebtoken');
const multer = require('multer')();
function verifyToken(req,res,next){
  try {
    req.token = jwt.verify(req.cookies['token'],process.env.SECRET);
    next();
  }
  catch(e) {
    next(e)
  }  
}
function restfulRouter(expressRouter, mongooseModel, bodyToDocument) {
  //get all resources from collection
  expressRouter.get("/", async (req, res, next) => {
    try {
      let result = await mongooseModel.find({}).exec();
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  //post(insert) a new item into collection
  expressRouter.post("/",verifyToken,multer.none(),async (req, res, next) => {
    let newDocument = bodyToDocument(req.body);
    try {
      await new mongooseModel(newDocument).save();
      res.status(201).send('resource created');
    } catch (error) {
      next(error);
    }
  });

  //edit a specfic resource
  expressRouter.put("/:id",verifyToken,multer.none(), async (req, res, next) => {
    try {
      let updatedDocument = bodyToDocument(req.body);
      await mongooseModel
        .findByIdAndUpdate(req.params.id, updatedDocument)
        .exec();
      res.status(200).send('resource updated');
    } catch (error) {
      next(error);
    }
  });

  //get a specific resource
  expressRouter.get("/:id", async (req, res, next) => {
    try {
      let result = await mongooseModel.findById(req.params.id).exec();
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  //get a specific resource
  expressRouter.delete("/:id", verifyToken,async (req, res, next) => {
    try {
      let result = await mongooseModel.deleteOne({_id : req.params.id}).exec();
      if (result.n > 0 ){
      res.send(result.n + ' resource(s) deleted');}
      else{
        res.send('query executed successfully but no resources were affected')
      }
    } catch (error) {
      next(error);
    }
  });

  return expressRouter;
}

module.exports = {restfulRouter,verifyToken};
