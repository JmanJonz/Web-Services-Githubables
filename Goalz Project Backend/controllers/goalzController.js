// imports

    // custom
        import goalzModel from "../models/goalzModel.js";
        import goalSchema from "../other_modules/schemas/goalSchema.js";

// post new goal
    const postGoal = async (req, res)=>{
        /**
        * #swagger.tags = ["Goalz"]
        * #swagger.description = "Post a new goal"
          #swagger.parameters["body"] = {
          in: "body",
          description: "Data Needed For New Goal",
          "schema": goalSchema
          }
        */
        try{
            const goalAdded = await goalzModel.create(req.body);
            res.status(200).json({"Goal Added": goalAdded});
        }catch(error){
            res.status(400).json({error: error.message});
        }
    };

// get goal by id
    const getGoal = async (req, res)=>{
        /**
        * #swagger.tags = ["Goalz"]
        * #swagger.description = "Get goal by id"
        */
        try{
            const goal = await goalzModel.findById(req.params.id);
            res.status(200).json(goal);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    };

// get all Goals
    const getGoalz = async (req, res)=>{
        /**
        * #swagger.tags = ["Goalz"]
        * #swagger.description = "Get all goalz"
        */
        try{
            const goalz = await goalzModel.find({}).sort({createdAt: -1}); 
            res.status(200).json(goalz);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    };

// replace Goal
    const replaceGoal = async (req, res)=>{
        /**
        * #swagger.tags = ["Goalz"]
        * #swagger.description = "Replace a goal by id"

        */
        try{
            await goalzModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({"Goal has been updated": req.body});
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }

// delete goal
    const deleteGoal = async (req, res)=>{
        /**
        * #swagger.tags = ["Goalz"]
        * #swagger.description = "Delete a goal by id"
        */
        try{
            await goalzModel.findByIdAndDelete(req.params.id);
            res.status(200).json({"Goal has been deleted for ever...": "Wamp Wamp"});
        }catch(error){
            res.status(400).json({error: error.message});
        }
    };

// exports
    export {postGoal, getGoal, getGoalz, replaceGoal, deleteGoal};
