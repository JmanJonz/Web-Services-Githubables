// imports

    // 3rd party modules
        import express from "express";

    // custom modules
        import {postUser, getUser, getUserz, replaceUser, deleteUser} from "../controllers/userzController.js";
        import {userIdValidation, userInputValidation} from "../other_modules/validation/userValidation.js";
        import validationErrorSender from "../other_modules/validation/validationErrorSender.js";
        import isAuthorized from "../other_modules/passport/isAuthorized.js";

        
// create a express router object to add routes to
    const userzRouter = express.Router();

// post new User
    userzRouter.post("/Userz", isAuthorized, userInputValidation, validationErrorSender, postUser);
 
// get User by id
    userzRouter.get("/Userz/:id",userIdValidation, validationErrorSender, getUser);

// get all Userz
    userzRouter.get("/Userz", getUserz);

// find and replace User
    userzRouter.put("/Userz/:id", isAuthorized, userIdValidation, userInputValidation, validationErrorSender, replaceUser);

// delete User by id
    userzRouter.delete("/Userz/:id", isAuthorized, userIdValidation, validationErrorSender, deleteUser);

// exports
    export default userzRouter;