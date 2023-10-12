import passport from "passport";
import googleStrat from "passport-google-oauth20";
    const GoogleStrategy = googleStrat.Strategy;
import dotenv from "dotenv";
    dotenv.config();
import userModel from "../../models/userModel.js"

const runPassportSetup = ()=>{
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    })

    passport.deserializeUser((id, done)=>{
        userModel.findById(id).then((user)=>{
            done(null, user);
        })
    })

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_REDIRECT_URL
      },
      function(accessToken, refreshToken, profile, done) {
        // check if user already exists in db
            userModel.findOne({googleId: profile.id}).then((existingUser)=>{
                if(existingUser){
                    // already have user
                                            console.log("Existing user" + existingUser);
                        done(null, existingUser);
                }else{
                    // if not create user in db
                        new userModel({
                            username: profile.displayName,
                            googleId: profile.id
                        }).save().then((newUser)=>{
                                                console.log("New user created:" + newUser);
                            done(null, newUser);
                        })            
                }
            })
      }
    ));
}

export default runPassportSetup;