import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
      title: 'Contacts API',
      description: 'For Everything Contact Related'
    },
    // You could add multiple hosts if you use openapi 3.0.0 with it...
    host: 'https://contacts-y9h1.onrender.com',
    schemes: ["https"]
  };

const options = {
    autoBody: true
}
  
  const outputFile = './custom_modules/swagger.json';
  const routes = ['./routers/contactsRouter.js'];
  
  /* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
  root file where the route starts, such as index.js, app.js, routes.js, etc ... */
  
const updateSwaggerDocs = ()=>{
// Looks like swaggerAutogen returns a function and then you are calling the return function with the following parameters...
    swaggerAutogen(options)(outputFile, routes, doc);
}

// exportupdateSwaggerDocs so that I can call it in index.js so that it runs automatically everytime the server restarts
    export default updateSwaggerDocs;



  