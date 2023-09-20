// imports
    import express  from "express";
    import mongoose from "mongoose";
    import dotenv from "dotenv";
    import cors from "cors";
    import contactsRouter from "./routers/contactsRouter.js";
    import swaggerUI from "swagger-ui-express";
    // doesn't work on render so only uncomment when updating documentation locally...
        // import swaggerJson from "./swagger.json" assert {type: "json"}; 

// configurations
    dotenv.config();

// make express app
    const server = express();

// connect to mongodb atlas database then start server
    (async()=>{
        try{
            await mongoose.connect(process.env.MONGODB_URI);
            const port = process.env.PORT || 3000;
            server.listen(port, ()=>{
                console.log(`Connected to DB & server listening on ${port}`);
            })
        }catch(error){
            console.error("Error connectiong to MongoDB:", error);
        }
    })();

// middleware

    // logging requests
        server.use((req, res, next)=>{ 
            console.log("Request method:", req.method);
            console.log("Request URL:", req.url);
            console.log("Request status code:", res.statusCode); 
            // run next to move onto next middleware!
                next();
        });

    // allow cross orgin requests from anywhere - next() is called in cors()...
        server.use(cors()); 

    // parsing req body from json to usable js object - next() is called in .json()...
        server.use(express.json()); 

    // deploy swagger API documention to UI
        (async ()=>{
            try{
                // const swaggerJSON = await fetch("./swagger.json");
                server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJson));
            }catch(error){
                console.error(error);
            }
        })();

// mounting imported routes to use with server
    
    // contacts routes
        server.use("/", contactsRouter);

    