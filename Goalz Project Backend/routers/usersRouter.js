// imports

    // 3rd party modules
        import express from "express";

    // custom modules
        import {postUser, getUser, getUserz, replaceUser, deleteUser} from "../controllers/userzController.js";
        
// create a express router object to add routes to
    const userzRouter = express.Router();

// post new User
    userzRouter.post("/Userz", postUser);
 
// get User by id
    userzRouter.get("/Userz/:id", getUser);

// get all Userz
    userzRouter.get("/Userz", getUserz);

// find and replace User
    userzRouter.put("/Userz/:id", replaceUser);

// delete User by id
    userzRouter.delete("/Userz/:id", deleteUser);

// exports
    export default userzRouter;