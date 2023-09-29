// imports

    // 3rd party
        import mongoose from "mongoose";

// create schema for goalz objects to follow using the schema class from the mongoose object
    const goalzSchema = new mongoose.Schema({
        goalTitle: {
            type: String,
            required: true,
            unique: true
        },
        startDate: {
            type: Date,
            required: false
        },
        completeByDate: {
            type: Date,
            required: true
        },
        belongsToValue: {
            type: String,
            required: true
        },
        urgentImportantRating: {
            type: Number,
            min: 1,
            max: 10
        },
        goalCompleted: {
            type: Boolean,
            required: true,
            default: false
        },
        userEmail: {
            type: String,
            required: true
        }
    });

// create and export a mongoose model object that uses this schema
    const goalzModel = mongoose.model("goalz", goalzSchema, "goalz");
    export default goalzModel;