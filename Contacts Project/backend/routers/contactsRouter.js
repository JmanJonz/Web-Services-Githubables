// post new contact
    import express from "express";
    import {getAllContacts, getContactById, postContact} from "../controllers/contactsController.js";
    const contactsRouter = express.Router();
    contactsRouter.post("/", postContact);

// get all contacts
    contactsRouter.get("/", getAllContacts);

// get contact by document id
    contactsRouter.get("/:id", getContactById);

// code exports
    export default contactsRouter;