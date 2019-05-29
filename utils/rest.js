function restfulRouter(expressRouter,mongooseModel,bodyToDocument){

    //get all resources
    expressRouter.get("/", async (req, res,next) => {
      console.log(req.session.id);
        try {
          let result = await mongooseModel.find({}).exec();
          res.json(result);
        } catch (error) {
          next(error);
        }
      });

      //post(insert) a new item to resources
      expressRouter.post("/", async (req, res,next) => {
        let newDocument = bodyToDocument(req.body);
      
        try {
          await new mongooseModel(newDocument).save();
          res.redirect("/");
        } catch (e) {
          next(e);
        }
      });

      //edit a specfic resource
      expressRouter.put("/:id", async (req, res,next) => {
        try {
          let updatedDocument = bodyToDocument(req.body);
      
          await mongooseModel.findByIdAndUpdate(req.params.id,updatedDocument).exec();
          res.redirect('/')
       
        }
        catch (error) {
          next(error);
        }
      });

      //get a specific resource 
      expressRouter.get("/:id", async (req, res,next) => {
        try {
          let result = await mongooseModel.findById(req.params.id).exec();
          res.json(result);
        } catch (error) {
          next(error);
        }
      });

      return expressRouter;
}


module.exports = restfulRouter;
