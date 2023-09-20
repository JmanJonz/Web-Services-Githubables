// post new contact
    import contactsModel from "../models/contactsModel.js";
    const postContact = async(req, res)=>{
        try{
            const contact = await contactsModel.create(req.body);
            res.status(200).json(contact);
        }catch(error){
            res.status(400).json({error: error.message});
        }
        
    }; 

// get all contacts
    const getAllContacts = async (req, res)=>{
        try{
            const contacts = await contactsModel.find({}).sort({createdAt: -1});
            res.status(200).json(contacts);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    };

// get contact by document id
    const getContactById = async (req, res)=>{
        const {id} = req.params;
        const contact = await contactsModel.findById(id);
        res.status(200).json(contact); 
    };

// exports
export {getAllContacts, getContactById, postContact};