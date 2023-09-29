// imports

    // 3rd party
        import mongoose from "mongoose";

// create schema for goalz objects to follow using the schema class from the mongoose object
    const userzSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    });

// create and export a mongoose model object that uses this schema
    const userzModel = mongoose.model("userz", userzSchema, "userz");
    export default userzModel;