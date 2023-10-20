// imports

    // 3rd party modules
    import express from "express";
    import cors from "cors";
    import swaggerUI from "swagger-ui-express";
    import expressSession from "express-session";
    import passport from "passport";
    import dotenv from "dotenv";
    import mongoose from "mongoose";

// custom modules
    import goalzRouter from "./routers/goalzRouter.js";
    import userzRouter from "./routers/userzRouter.js";
    import updateSwaggerJSON from "./other_modules/swagger/swagger.js";
    // import swaggerJSON from "./other_modules/swagger/swagger.json" assert {"type": "json"};
    import authRouter from "./routers/authRouter.js";

// create an express app object to use to create a app and routes
    const app = express();

// connect to the db but don't start app yet so that
// it can be passed and ran on any port anywhere such as tests...

    dotenv.config();

    try{
        await mongoose.connect(process.env.MONGODB_URI);
            console.log("Connected To DB");
    }catch(error){
        console.error("Error connected to DB", error);
    }

// allow cross orgin request from anywhere / specific urls - next() is called within the cors function...
    app.use(cors());

// log requests to this app
    app.use((req, res, next)=>{
        console.log("Request method:", req.method);
        console.log("Request URL:", req.url);
        // run next in order to keep middleware executing
            next();
    });

// parse the req body from JSON to usable JS object - again next is called inside this premade middleware
    app.use(express.json());

// update swaggerdocs and create swagger ui documentation
// I wrote false in here becasue at the moment I am not importing swaggerJSON...
    if(false){
        updateSwaggerJSON();
        app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));    
    }

// check if the user making the request already has a session
    const session = expressSession({
        secret: process.env.CK_KEY,
        resave: false,
        saveUninitialized: false,
    });

// initialize passport
    app.use(session);
    app.use(passport.initialize());
    app.use(passport.session());


// mount routers (modules that contain a group of related express app endpoints...)

// authentication router
    app.use("/auth", authRouter);

// user router
    app.use("/", userzRouter);

// goalz router
    app.use("/", goalzRouter);

// export app to be started in index.js and to be used seprately in tests
export default app;