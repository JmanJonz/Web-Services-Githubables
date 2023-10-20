// imports

    // 3rd party modules
        import express from "express";

    // custom modules
        import {postGoal, getGoal, getGoalz, replaceGoal, deleteGoal} from "../controllers/goalzController.js";
        import { goalIdValidation, goalInputValidation } from "../other_modules/validation/goalValidation.js";
        import validationErrorSender from "../other_modules/validation/validationErrorSender.js";
        import isAuthorized from "../other_modules/passport/isAuthorized.js";
        
// create a express router object to add routes to
    const goalzRouter = express.Router();

                    // for testing testing
                        goalzRouter.get("/goalz/yes", async(req, res)=>{
                            res.status(200).send("yes");
                        })

// post new goal
    goalzRouter.post("/goalz", isAuthorized, goalInputValidation, validationErrorSender, postGoal);
 
// get goal by id
    goalzRouter.get("/goalz/:id", goalIdValidation, validationErrorSender, getGoal);

// get all goalz
    goalzRouter.get("/goalz", getGoalz);

// find and replace goal
    goalzRouter.put("/goalz/:id", isAuthorized, goalIdValidation, validationErrorSender, replaceGoal);

// delete goal by id
    goalzRouter.delete("/goalz/:id", isAuthorized, goalIdValidation, validationErrorSender, deleteGoal);

// exports
    export default goalzRouter;