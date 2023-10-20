// imports

    // 3rd party modules
    import express from "express";
    import cors from "cors";
    import swaggerUI from "swagger-ui-express";
    import expressSession from "express-session";
    import passport from "passport";

// custom modules
    import goalzRouter from "./routers/goalzRouter.js";
    import userzRouter from "./routers/userzRouter.js";
    import updateSwaggerJSON from "./other_modules/swagger/swagger.js";
    import swaggerJSON from "./other_modules/swagger/swagger.json" assert {"type": "json"};
    import authRouter from "./routers/authRouter.js";

// create an express app object to use to create a app and routes
const app = express();

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
    updateSwaggerJSON();
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

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