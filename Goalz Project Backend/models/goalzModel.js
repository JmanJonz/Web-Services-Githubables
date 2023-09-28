// imports

    // 3rd party
        import mongoose from "mongoose";

// create schema for goalz objects to follow using the schema class from the mongoose object
    const goalzSchema = new mongoose.Schema({
        goalTitle: {
            type: String,
            required: true
        },
        goalOwner: {
            type: String,
            required: true
        },
        completeByDate: {
            type: Date,
            required: true
        },
        belongsToValue: {
            type: String,
            required: true
        },
        goalCompleted: {
            type: Boolean,
            required: true,
            default: false
        }
    });

// create and export a mongoose model object that uses this schema
    const goalzModel = mongoose.model("goalz", goalzSchema, "goalz");
    export default goalzModel;