// create express server
    import express from "express";
    const server = express();

// start server after connecting to DB
    import mongoose from "mongoose";
    import dotenv from "dotenv";
    dotenv.config();
    (async ()=>{
        try{
            await mongoose.connect(process.env.MONGODB_URI);
            const port = process.env.PORT || 3000;
            server.listen(port, () => {
                console.log(`Connected to DB & Serving at port ${port}`);
            })
        }catch(error){
            console.error("Error connecting to MongoDB", error);
        }
    })();

// middleware that logs every request
    server.use((req, res, next) => {
        console.log("Request method:", req.method);
        console.log("Request URL:", req.url);
        console.log("Request status code:", res.statusCode);
        next();
    });

// handle requests through imported routers
    import contactsRouter from "./routers/contactsRouter.js";
    server.use("/", contactsRouter);

