// imports
    import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Contacts Project",
            version: "100000"
        }
    },
    apis: ["../routers/contactsRouter.js"]
};

const swaggerDoc = swaggerJSDoc(swaggerOptions);

// exports
    export default swaggerDoc;
