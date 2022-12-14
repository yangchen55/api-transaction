import express  from "express";

const router  = express.Router();

import {findAuser, insertUser} from '../models/users/UserModel.js'

//crreate  
router.post('/', async (req, res, next)  => {

    try {
    // get the incoming data 
    //  req.body is gives all the form data from frontend when we do the inspect page, whatever the name contain in html form 
        const user = await insertUser(req.body) 
        // call insertUser to insert into the databasee 
       if(user?._id){
        res.json({
            status: "success",
            message : "user created suceessfully",
            user:{
                name: user.name,
                _id: user._id,
            }
        });
       }
       res.json({
        status: "error",
        message : "unable to create user, please try again"
    });
       
        
    } catch (error) {
       error.code = 500
        if(error.message.includes("E11000 duplicate")){
            error.code = 200;
            error.message = "double email address"
        }
        next(error)
        
    }
})

router.post("/login", async(req, res, next)  => {
    try {
        // grab the data coming from loging form 
       const user = await  findAuser(req.body);
       console.log(user);

        // querry database with email and pin if there is account exits
user?._id 
? res.json ({
    status : 'success',
    message: "login successfully",
    user: {
        _id: user._id,
        email: user.email
    }

}): 
res.json ({
    status : 'error',
    message: "invalid details",

});
        // true, login success
        // false, invalid login 
        
    } catch (error) {

         error.code = 200;
        if(error.message.includes("invalid")){
            error.code = 200;
            error.message = "double email address"
        }
       
        next(error)
        
    }
})
export default router;