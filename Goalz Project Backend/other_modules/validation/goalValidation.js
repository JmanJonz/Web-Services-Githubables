// imports

    // others
        import {body, param} from "express-validator";
        
    // arrays of validation middleware for goalz
    
        // for requests using id parameter
            const goalIdValidation = [
                param("id").isLength({ min: 24, max: 24 }).withMessage("Include valid goal id (24 characters long)")
            ];
    
        // for request with inputs
            const goalInputValidation = [
                body("goalTitle").notEmpty().withMessage("Cannot be empty"),
                body("completeByDate").notEmpty().withMessage("Cannot be empty"),
                body("belongsToValue").notEmpty().withMessage("Cannot be empty"),
                body("urgentImportantRating").notEmpty().isInt().withMessage("Cannot be empty"),
                body("goalCompleted").notEmpty().withMessage("Cannot be empty"),
                body("userEmail").isEmail().normalizeEmail({ gmail_remove_dots: true }).withMessage("Must enter a valid email")
            ];
    
    // exports to be used on middleware specific to the routes
        export {goalIdValidation, goalInputValidation};