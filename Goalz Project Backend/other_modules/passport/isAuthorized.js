// this middleware function checks to see if there is a user in the
// req.user and so allows validation
    function isAuthorized(req, res, next){
        if(req.user){
            next();
        }else{
            res.send("You need to login to access this route");
        }
    }

// export to be used in routes
    export default isAuthorized;