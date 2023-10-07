// 3p imports
    import express from "express";
    import passport from "passport";
    import runPassportSetupFunction from "../other_modules/authorization/passportSetup.js";

// custom imports
    import { executeLogout } from "../controllers/authController.js";

// execute passport setup so it can be used
    runPassportSetupFunction();

// create authentication router object
    const authRouter = express.Router();

// login / create account route
    authRouter.get("/login/google", passport.authenticate("google", {
        scope: ["profile"]
    }));

// logout 
    authRouter.get("/logout", executeLogout);

// export router to be used in index.js
    export default authRouter;
