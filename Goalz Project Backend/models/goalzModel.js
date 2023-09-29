// imports

    // 3rd party
        import mongoose from "mongoose";

    // custom 
        import goalSchema from "../other_modules/schemas/goalSchema.js";

// create schema for goalz objects to follow using the schema class from the mongoose object
    const goalzSchema = new mongoose.Schema(goalSchema);

// create and export a mongoose model object that uses this schema
    const goalzModel = mongoose.model("goalz", goalzSchema, "goalz");
    export default goalzModel;