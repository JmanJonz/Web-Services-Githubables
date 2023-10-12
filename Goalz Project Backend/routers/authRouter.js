// imports 
    import express from "express";
    import passport from "passport";
    import runPassportSetup from "../other_modules/passport/passportSetup.js";
        runPassportSetup();

// make auth router
    const authRouter = express.Router();

// route for creating an account / logging in with google

    authRouter.get(/**
    * #swagger.tags = ["Authorization"]
    */"/create-or-login/google", passport.authenticate("google", {scope: ["profile"]}));

// googles redirect url that it sends a code to use in query params to access user info
    authRouter.get(    /**
    * #swagger.tags = ["Authorization"]
    */"/google/redirect", passport.authenticate("google"),(req, res)=>{
        res.redirect("/auth/profile");
    })

// Once user has logged in successfully with passport redired here
    authRouter.get(    /**
    * #swagger.tags = ["Authorization"]
    */"/profile", (req, res)=>{
        if(!req.user){
            res.redirect("/auth/create-or-login/google")
        }
        res.send(`You are logged in and your info is ${req.user.username}`)
    })

// manual user logout
    authRouter.get(    /**
    * #swagger.tags = ["Authorization"]*/"/logout", (req, res)=>{
        req.logout((req, res)=>{
        });
        res.redirect("/auth/create-or-login/google");
    })

// export auth router to be used in index.js
    export default authRouter;