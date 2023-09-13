// imports
    import express from "express";

// create express server
    const server = express();

// start server after connecting to DB
    server.listen(process.env.PORT || 3000, () => {
        console.log(`Serving at port ${process.env.PORT || 3000}`)
    })

// handle requests through routers>controllers
    server.get("/", (req, res) => {
        res.send("Responses Working");
    })

