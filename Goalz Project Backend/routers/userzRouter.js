// imports

    // 3rd party modules
        import express from "express";

    // custom modules
        import {postUser, getUser, getUserz, replaceUser, deleteUser} from "../controllers/userzController.js";
        import {userGetDeleteV, userPostV} from "../other_modules/validation/userValidation.js";
        import validationErrorSender from "../other_modules/validation/validationErrorSender.js";

        
// create a express router object to add routes to
    const userzRouter = express.Router();

// post new User
    userzRouter.post("/Userz",userPostV, validationErrorSender, postUser);
 
// get User by id
    userzRouter.get("/Userz/:id",userGetDeleteV, validationErrorSender, getUser);

// get all Userz
    userzRouter.get("/Userz", getUserz);

// find and replace User
    userzRouter.put("/Userz/:id",userPostV, validationErrorSender, replaceUser);

// delete User by id
    userzRouter.delete("/Userz/:id",userGetDeleteV, validationErrorSender, deleteUser);

// exports
    export default userzRouter;