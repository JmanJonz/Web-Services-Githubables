// imports 
    
    // 3rd party
        import swaggerAutogen from "swagger-autogen";
    
    // custom
        import goalSchema from "./schemas/goalSchema.js";
        import userSchema from "./schemas/userSchema.js";

// (not required) creating some configuration options for swaggerAutogen module
    const options = {
        // using this so that I can use variables in js docs... using imported schema...
            openapi: "3.0.0"
    };

// set up a doc object to be used in swagger documentation
    const doc = {
        info: {
            title: 'Goalz App API',
            description: 'Access To Goalz App DB'
          },
          // You could add multiple hosts if you use openapi 3.0.0 with it...
        //   host: 'goalz-project.onrender.com',
          host: 'goalz-project.onrender.com',
          schemes: ["https", "http"],
          components: {
            schemas: {
                goalSchema: goalSchema,
                userSchema: userSchema
            }
          }
    }

// storing the location of the file where all endpoints exist (usually just all your router files...)
// since you are importing this into index.js all routes should be from there!
    const routes = ["./index.js"];

// storing the location of the file where auto generated json document will be written
// since you are importing this into index.js all routes should be from there!
    const outputFile = "./other_modules/swagger/swagger.json";

// exporting this function to regenerate swagger.json everytime the server restarts
// if you are using nodemon you will want to edit your package.json so that it doesn't restart everytime it notices changes in the swagger.json file as this can create an endless loop...
// you can also not export this function and just add runing this file to your start scripts...
    const updateSwaggerJSON = ()=>{
        // Looks like swaggerAutogen returns a function and then you are calling the return function with the following parameters...
            swaggerAutogen(options)(outputFile, routes, doc);
    }

// export this function and call it in index.js so that everytime the server restarts it will auto update the documentation
    export default updateSwaggerJSON;
