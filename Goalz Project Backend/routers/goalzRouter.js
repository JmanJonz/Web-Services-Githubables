// imports

    // 3rd party modules
        import express from "express";

    // custom modules
        import {postGoal, getGoal, getGoalz, replaceGoal, deleteGoal} from "../controllers/goalzController.js";
        import { goalIdValidation, goalInputValidation } from "../other_modules/validation/goalValidation.js";
        import validationErrorSender from "../other_modules/validation/validationErrorSender.js";
        
// create a express router object to add routes to
    const goalzRouter = express.Router();

// post new goal
    goalzRouter.post("/goalz", goalInputValidation, validationErrorSender, postGoal);
 
// get goal by id
    goalzRouter.get("/goalz/:id", goalIdValidation, validationErrorSender, getGoal);

// get all goalz
    goalzRouter.get("/goalz", getGoalz);

// find and replace goal
    goalzRouter.put("/goalz/:id", goalIdValidation, validationErrorSender, replaceGoal);

// delete goal by id
    goalzRouter.delete("/goalz/:id", goalIdValidation, validationErrorSender, deleteGoal);

// exports
    export default goalzRouter;