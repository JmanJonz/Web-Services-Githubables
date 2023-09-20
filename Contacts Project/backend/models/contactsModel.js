// imports
    import mongoose from "mongoose";

// creating schema object for contacts using the .Schema() method
    const contactsSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        favoriteColor: {
            type: String,
            required: true
        },
        birthday: {
            type: String,
            required: true
        }
    });

// create and export model to be used in controllers
    const contactsModel = mongoose.model("contacts", contactsSchema);
    export default contactsModel;