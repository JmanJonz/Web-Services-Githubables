import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "Contacts API",
        description: "For post, get, put, and delete contacts",
    },
    host: "localhost:3000"
};

const outputFile = "./swagger.json";
const routes = ["./routers/contactsRouter.js"];

swaggerAutogen(outputFile, routes, doc);