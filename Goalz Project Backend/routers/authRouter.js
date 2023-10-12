// imports 
    import express from "express";
    import passport from "passport";
    import runPassportSetup from "../other_modules/passport/passportSetup.js";
        runPassportSetup();

// make auth router
    const authRouter = express.Router();

// route for creating an account / logging in with google
    authRouter.get("/create-or-login/google", passport.authenticate("google", {scope: ["profile"]}));

// googles redirect url that it sends a code to use in query params to access user info
    authRouter.get("/google/redirect", passport.authenticate("google"),(req, res)=>{
        res.send(req.user);
    })

// export auth router to be used in index.js
    export default authRouter;