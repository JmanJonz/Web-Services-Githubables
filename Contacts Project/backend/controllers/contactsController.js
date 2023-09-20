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

// get all contacts
    const getContacts = async (req, res)=>{
        try{
            const contacts = await contactsModel.find({}).sort({createdAt: -1}); 
            res.status(200).json(contacts);
        }catch(error){
            res.status(400).json({error: error.message});
        }

    }

// 

// exports
    export {postContact, getContacts};