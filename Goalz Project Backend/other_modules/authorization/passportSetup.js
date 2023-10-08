// 3rd party imports
    import passport from "passport";
    import passportGoogleAuth from "passport-google-oauth2";
    import dotenv from "dotenv";

// custom imports
    import userModel from "../../models/userModel.js";

// making it so that I can access .env vars in this file
    dotenv.config();

// need to actually use the strategy function from passport-google-oauth2
    const GoogleStrategy = passportGoogleAuth.Strategy

// adding functionality to the passport object with the use method
    const runPassportSetupFunction = ()=>{
        passport.use(new GoogleStrategy({
            clientID:     process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/auth/google/redirect",
            passReqToCallback   : true
          },
          // this function is what goes off once the user is verified and passport has got it's info...
          // this is where we will create a new user / authorize user if user already added to db
            function(request, accessToken, refreshToken, profile, done){
                                                                                console.log(profile)
            }
        ));
    };

// export to be used in authRouter
    export default runPassportSetupFunction;
    

