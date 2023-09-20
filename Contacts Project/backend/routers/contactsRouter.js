// imports
    import express from "express";
    import { postContact, getContact, getContacts } from "../controllers/contactsController.js";

// configurations
    const contactsRouter = express.Router();

// post new contact
    contactsRouter.post("/", postContact);

// get contact by id
    contactsRouter.get("/:id", getContact);

// get all contacts
    contactsRouter.get("/", getContacts);

// exports
    export default contactsRouter;
