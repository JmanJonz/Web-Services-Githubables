// imports
    import express from "express";
    import { postContact, getContact, getContacts, replaceContact, deleteContact} from "../controllers/contactsController.js";
    import runSwaggerAutogen from "../swagger.js";

// configurations
    const contactsRouter = express.Router();

// post new contact
    contactsRouter.post("/", postContact);
 
// get contact by id
    contactsRouter.get("/:id", getContact);

// get all contacts
    contactsRouter.get("/", getContacts);

// find and replace contact
    contactsRouter.put("/:id", replaceContact);

// delete contact by id
    contactsRouter.delete("/:id", deleteContact);

// use imported swagger function to auto generate documentation
    runSwaggerAutogen();

// exports
    export default contactsRouter;
