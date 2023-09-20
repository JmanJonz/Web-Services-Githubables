// imports
    import contactsModel from "../models/contactsModel.js";

// post new contact
    const postContact = async (req, res)=>{
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
        try{
            const contact = await contactsModel.findById(req.params.id);
            res.status(200).json(contact);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }

// get all contacts
    const getContacts = async (req, res)=>{
        try{
            const contacts = await contactsModel.find({}).sort({createdAt: -1}); 
            res.status(200).json(contacts);
        }catch(error){
            res.status(400).json({error: error.message});
        }

    }

// replace contact
    const replaceContact = async (req, res)=>{
        try{
            await contactsModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({"Contact has been updated": req.body});
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }

// replace contact
const deleteContact = async (req, res)=>{
    try{
        await contactsModel.findByIdAndDelete(req.params.id);
        res.status(200).json({"Contact has been deleted for ever...": "Wamp Wamp"});
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

// exports
    export {postContact, getContact, getContacts, replaceContact, deleteContact};