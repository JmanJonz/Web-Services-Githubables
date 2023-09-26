// imports
    import contactsModel from "../models/contactsModel.js";

// post new contact
    const postContact = async (req, res)=>{
        /**
         * #swagger.tags = ["Contacts"]
         * #swagger.description = Post a New Contact To DB
         * #swagger.parameters['body'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                "firstName": "Me5",
                "lastName": "Yeah",
                "email": "blajdfkj@gmail.com",
                "favoriteColor": "dont",
                "birthday": "11/1233/34"
            }
        }
         */
        try{
            console.log(req.body);
            const contact = await contactsModel.create(req.body);
            res.status(200).json({contact});
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }

// get contact by id
    const getContact = async (req, res)=>{
        /**
         * #swagger.tags = ["Contacts"]
         */
        try{
            const contact = await contactsModel.findById(req.params.id);
            res.status(200).json(contact);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }

// get all contacts
    const getContacts = async (req, res)=>{
        /**
         * #swagger.tags = ["Contacts"]
         */
        try{
            const contacts = await contactsModel.find({}).sort({createdAt: -1}); 
            res.status(200).json(contacts);
        }catch(error){
            res.status(400).json({error: error.message});
        }

    }

// replace contact
    const replaceContact = async (req, res)=>{
        /**
         * #swagger.tags = ["Contacts"]
         * #swagger.description = Replace Contact In DB
         * #swagger.parameters['body'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                "firstName": "Me5",
                "lastName": "Yeah",
                "email": "blajdfkj@gmail.com",
                "favoriteColor": "dont",
                "birthday": "11/1233/34"
            }
        }
         */
        try{
            await contactsModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({"Contact has been updated": req.body});
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }

// delete contact
const deleteContact = async (req, res)=>{
    /**
     * #swagger.tags = ["Contacts"]
     */
    try{
        await contactsModel.findByIdAndDelete(req.params.id);
        res.status(200).json({"Contact has been deleted for ever...": "Wamp Wamp"});
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

// exports
    export {postContact, getContact, getContacts, replaceContact, deleteContact};