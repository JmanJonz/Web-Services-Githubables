// imports
    import express from "express";
    import { postContact, getContacts } from "../controllers/contactsController.js";

// configurations
    const contactsRouter = express.Router();

// post new contact
    contactsRouter.post("/", postContact);

// get all contacts
    contactsRouter.get("/", getContacts);

// exports
    export default contactsRouter;
