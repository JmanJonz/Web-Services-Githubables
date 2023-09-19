// post new contact
    import contactsModel from "../models/contactsModel.js";
    const postContact = async(req, res)=>{
        const contact = req.body;
        await contactsModel.create(contact);
        res.send(contact);
    };

// get all contacts
    const getAllContacts = async (req, res)=>{
        const contacts = await contactsModel.find({}).sort({createdAt: -1});
        res.status(200).json(contacts);
    };

// get contact by document id
    const getContactById = async (req, res)=>{
        const {id} = req.params;
        const contact = await contactsModel.findById(id);
        res.status(200).json(contact);
    };

// exports
export {getAllContacts, getContactById, postContact};