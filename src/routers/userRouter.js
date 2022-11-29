import express  from "express";

const router  = express.Router();

import {insertUser} from '../models/users/UserModel.js'

//crreate  
router.post('/', async (req, res, next)  => {

    try {
        // get the incoming data 
     
        const user = await insertUser(req.body) 
        // call insertUser to insert into the databasee 
       if(user?._id){
        res.json({
            status: "success",
            message : "user created suceessfully"
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

export default router;