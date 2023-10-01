// imports

    // 3rd party
        import {body, param} from "express-validator";
        
// validation arrays of middleware for user validation

    // for post requests
        const userPostV = [
            body("email").isEmail().normalizeEmail({ gmail_remove_dots: true }).withMessage("Must enter a valid email"),
            body('password').isLength({ min: 7 }).withMessage('Password must be 7 or more characters'),        
            body('firstName').not().isEmpty().withMessage('Name is requied'),
            body('lastName').not().isEmpty().withMessage('Name is requied')    
        ];

    // for get & delete requests
        const userGetDeleteV = [
            param("id").isLength({ min: 24, max: 24 }).withMessage("Include valid user id (24 characters long)")
        ];

    // for put requests
        const userPutV = [
            param("id").isLength({ min: 24, max: 24 }).withMessage("Include valid user id (24 characters long)"),
            body("email").isEmail().normalizeEmail({ gmail_remove_dots: true }).withMessage("Must enter a valid email"),
            body('password').isLength({ min: 7 }).withMessage('Password must be 7 or more characters'),        
            body('firstName').not().isEmpty().withMessage('Name is requied'),
            body('lastName').not().isEmpty().withMessage('Name is requied')    
        ];

// exports to be used on middleware specific to the routes
    export {userPostV, userGetDeleteV, userPutV};