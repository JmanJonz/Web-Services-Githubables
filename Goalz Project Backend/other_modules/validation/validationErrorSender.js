// imports

    // 3rd party
        import {validationResult} from "express-validator"

// check if there were errors from the user validation and if so respond with errors
    const validationErrorSender = (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        // if there are no error proceed to next middleware 
        next();
    }

// export function to be used after validation in path endpoints middleware
    export default validationErrorSender;