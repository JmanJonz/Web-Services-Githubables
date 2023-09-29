// imports

    // 3rd party
        import {check} from "express-validator";
        
// custom sets of functions for validations

    // for user inputs 
        const newUserValidation = [
            check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
            check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),        
            check('firstName', 'Name is requied').not().isEmpty(),
            check('lastName', 'Name is requied').not().isEmpty(),
        ];

    // for goal inputs
        const newGoalValidation = [

        ]

    // for goal inputs

// exports to be used on middleware specific to the routes
    export {newUserValidation};