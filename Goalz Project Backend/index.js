// imports

    // 3rd party modules
        import express from "express";
        import dotenv from "dotenv";
        import mongoose from "mongoose";
        import cors from "cors";
        import swaggerUI from "swagger-ui-express";

    // custom modules
        import goalzRouter from "./routers/goalzRouter.js";
        import userzRouter from "./routers/userzRouter.js";
        import updateSwaggerJSON from "./other_modules/swagger/swagger.js";
        import swaggerJSON from "./other_modules/swagger/swagger.json" assert {"type": "json"};

// create an express server object to use to create a server and routes
    const server = express();

// connect to database and then start server if successful
    // make .env variables available here (variables you don't want to upload publicly to github...)
        dotenv.config();
    (async()=>{
        try{
            await mongoose.connect(process.env.MONGODB_URI);
            const port = process.env.PORT || 3000;
            server.listen(port, ()=>{
                console.log(`Connected To DB & Serving On Port: ${port}`);
            })
        }catch(error){
            console.error("Error connectiong to MongoDB / Starting server:", error);
        }
    })();

// global middleware that will run upon all requests reguardless of paths before path specific middleware 

    // allow cross orgin request from anywhere / specific urls - next() is called within the cors function...
        server.use(cors());

    // log requests to this server
        server.use((req, res, next)=>{
            console.log("Request method:", req.method);
            console.log("Request URL:", req.url);
            // run next in order to keep middleware executing
                next();
        });

    // parse the req body from JSON to usable JS object - again next is called inside this premade middleware
        server.use(express.json());

    // update swaggerdocs and create swagger ui documentation
        updateSwaggerJSON();
        server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

// mount routers (modules that contain a group of related express server endpoints...)
    
    // user router
        server.use("/", userzRouter);

    // goalz router
        server.use("/", goalzRouter);
