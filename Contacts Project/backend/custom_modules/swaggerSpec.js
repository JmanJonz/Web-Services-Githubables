// imports
    import swaggerJSDoc from "swagger-jsdoc";

// set up options object
    const options = {
        definition : {
            openapi : "3.0.0",
            info : {
                title : "Contacts Project",
                version : "1.0.1",
            },
            servers : [
                {
                    url : "http://localhost:3000"
                }
            ]
        },
        apis : ["/routers/contactsRouter.js"]
    }

    const swaggerSpec = swaggerJSDoc(options);

// export options to be used with swagger ui express
    export default swaggerSpec;
