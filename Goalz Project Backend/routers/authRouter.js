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
        scope: ["profile", "email"]
    }));

// handle the google redirect after verified 
// this time passport is using query param code to get info from google and then firing 
// it's callback function
    authRouter.get("/google/redirect", passport.authenticate("google"), (req, res)=>{
        res.send("You have been verified by google and are now back at the app");
    })

// logout 
    authRouter.get("/logout", executeLogout);

// export router to be used in index.js
    export default authRouter;
