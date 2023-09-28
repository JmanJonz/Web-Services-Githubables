// imports 
    
    // 3rd party
        import swaggerAutogen from "swagger-autogen";

// set up a doc object to be used in swagger documentation
    const doc = {
        info: {
            title: 'Goalz App API',
            description: 'Access To Goalz App DB'
          },
          // You could add multiple hosts if you use openapi 3.0.0 with it...
          host: 'localhost:3000',
          schemes: ["https", "http"]
    }

// you could setup some options here for the whole documentation but I take care of it in the controller functions
    // const options = {
    //     autoBody: true
    // }

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
            swaggerAutogen()(outputFile, routes, doc);
    }

// export this function and call it in index.js so that everytime the server restarts it will auto update the documentation
    export default updateSwaggerJSON;
