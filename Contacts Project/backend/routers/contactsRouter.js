// imports
    import express from "express";
    import { postContact, getContact, getContacts, replaceContact, deleteContact} from "../controllers/contactsController.js";
    import swaggerSpec from "../custom_modules/swaggerSpec.js";
    import swaggerJSDoc from "swagger-jsdoc";

// configurations
    const contactsRouter = express.Router();

// post new contact
    contactsRouter.post("/", postContact);
 
// get contact by id
    contactsRouter.get("/:id", getContact);

/**
 * @swagger
 * /:
 *  get:
 *      summary: used to get all contacts
 *      description: used to get all contacts
 *      responses: 
 *          200
 *          description: got all contacts
 */
// get all contacts
    contactsRouter.get("/", getContacts);

// find and replace contact
    contactsRouter.put("/:id", replaceContact);

// delete contact by id
    contactsRouter.delete("/:id", deleteContact);

// exports
    export default contactsRouter;
