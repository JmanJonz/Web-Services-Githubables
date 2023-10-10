// 3p imports
    import mongoose from "mongoose";

// create user schema
    const userSchema = new mongoose.Schema({
        username: String,
        googleId: {
            type: String,
            unique: true
        }
    })

// create userModel
    const userModel = mongoose.model("user", userSchema);

// export to be used in passport setup callback function
    export default userModel;

