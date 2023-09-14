// get all contacts
    import express from "express";
    import {getAllContacts, getContactById} from "../controllers/contactsController.js"
    const contactsRouter = express.Router()
    contactsRouter.get("/", getAllContacts);

// get contact by document id
    contactsRouter.get("/:id", getContactById)
// code exports
    export default contactsRouter;