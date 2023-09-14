// create a mongoose Schema object for contacts
    import mongoose from "mongoose";
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
    })

// using the mongoose.model() method to create a contactsModel object using the collection name and contactsSchema object
    const contactsModel = mongoose.model("contacts", contactsSchema);

// exporting contactsModel object so it's methods and attributes can be used in a controller
    export default contactsModel;

