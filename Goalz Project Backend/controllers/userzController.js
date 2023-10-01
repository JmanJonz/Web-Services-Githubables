// imports

    // custom
        import userzModel from "../models/userzModel.js";

// post new user
    const postUser = async (req, res)=>{
        /**
        * #swagger.tags = ["Userz"]
        * #swagger.description = "Post a new user"
        * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/userSchema"
                    }  
                }
            }
        } 
        */
        try{
            console.log(req.body);
            const userAdded = await userzModel.create(req.body);
            res.status(200).json({"user Added": userAdded});
        }catch(error){
            res.status(400).json({error: error.message});
        }
    };

// get user by id
    const getUser = async (req, res)=>{
        /**
        * #swagger.tags = ["Userz"]
        * #swagger.description = "Get user by id"
        */
        try{
            const user = await userzModel.findById(req.params.id);
            res.status(200).json(user);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    };

// get all users
    const getUserz = async (req, res)=>{
        /**
        * #swagger.tags = ["Userz"]
        * #swagger.description = "Get all userz"
        */
        try{
            const userz = await userzModel.find({}).sort({createdAt: -1}); 
            res.status(200).json(userz);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    };

// replace user
    const replaceUser = async (req, res)=>{
        /**
        * #swagger.tags = ["Userz"]
        * #swagger.description = "Replace a user by id"
        * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/userSchema"
                    }  
                }
            }
        } 
        */
        try{
            console.log(req.body);
            await userzModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({"user has been updated": req.body});
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }

// delete user
    const deleteUser = async (req, res)=>{
        /**
        * #swagger.tags = ["Userz"]
        * #swagger.description = "Delete a user by id"
        */
        try{
            await userzModel.findByIdAndDelete(req.params.id);
            res.status(200).json({"user has been deleted for ever...": "Wamp Wamp"});
        }catch(error){
            res.status(400).json({error: error.message});
        }
    };

// exports
    export {postUser, getUser, getUserz, replaceUser, deleteUser};
