import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js"

// connect to database and then start app if successful
// make .env variables available here (variables you don't want to upload publicly to github...)
    dotenv.config();
    (async()=>{
        try{
            await mongoose.connect(process.env.MONGODB_URI);
            const port = process.env.PORT || 3000;
            app.listen(port, ()=>{
                console.log(`Connected To DB & Serving On Port: ${port}`);
            })
        }catch(error){
            console.error("Error connectiong to MongoDB / Starting app:", error);
        }
    })();