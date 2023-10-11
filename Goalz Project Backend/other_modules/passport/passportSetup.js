import passport from "passport";
import googleStrat from "passport-google-oauth20";
    const GoogleStrategy = googleStrat.Strategy;
import dotenv from "dotenv";
    dotenv.config();
import userModel from "../../models/userModel.js"

export default passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_REDIRECT_URL
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
  }
));