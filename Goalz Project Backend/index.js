import app from "./app.js";
import dotenv from "dotenv";

// start express server app if db is connected
    dotenv.config();

    const port = process.env.PORT || 3000;
    app.listen(port, ()=>{
        console.log(`Serving On Port: ${port}`);
    })