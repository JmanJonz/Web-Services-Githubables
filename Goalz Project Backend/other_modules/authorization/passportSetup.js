// 3rd party imports
    import passport from "passport";
    import GoogleStrategy from "passport-google-oauth2";
    import dotenv from "dotenv";

// making it so that I can access .env vars in this file
    dotenv.config();

// adding functionality to the passport object with the use method
    const runPassportSetupFunction = ()=>{
        passport.use(new GoogleStrategy({
            clientID: process.env.CLIENT_ID_GOOGLE,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: '/auth/google/redirect'
        }, ()=>{
            console.log("This is the google redirect function running");
        })
        )
    };

// export to be used in authRouter
    export default runPassportSetupFunction;
    

