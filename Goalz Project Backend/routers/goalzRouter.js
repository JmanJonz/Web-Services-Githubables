// imports

    // 3rd party modules
        import express from "express";

    // custom modules
        import {postGoal, getGoal, getGoalz, replaceGoal, deleteGoal} from "../controllers/goalzController.js";
        
// create a express router object to add routes to
    const goalzRouter = express.Router();

// post new goal
    goalzRouter.post("/goalz", postGoal);
 
// get goal by id
    goalzRouter.get("/goalz/:id", getGoal);

// get all goalz
    goalzRouter.get("/goalz", getGoalz);

// find and replace goal
    goalzRouter.put("/goalz/:id", replaceGoal);

// delete goal by id
    goalzRouter.delete("/goalz/:id", deleteGoal);

// exports
    export default goalzRouter;