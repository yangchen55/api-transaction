import express, { json }  from "express";
import { isAuth } from "../middleware/authmiddleware.js";



const router  = express.Router();

import { insertTransaction, getAllUsersTransactions } from '../models/transaction/transactionModel.js'

// get the data from the transaction database 
router.get("/", async(req, res, next)  =>{
    try {

      const {authorization} = req.headers;
        const trans = await getAllUsersTransactions({userId: authorization}) 
        res.json({
            status: "success",
            message : "created suceessfully",
            trans,
          
        });
    } catch (error) {
        next(error)     
        }
} )

router.post('/', isAuth,  async (req, res, next)  => {

    try {
    // get the incoming data 
    //  req.body is gives all the form data from frontend when we do the inspect page, whatever the name contain in html form 
  const {authorization} = req.headers;
    const transaction1 = await insertTransaction({...req.body, userId: authorization}) 
        // call insertUser to insert into the databasee 
       if(transaction1?._id){
        res.json({
            status: "success",
            message : "transaction added suceessfully",
          
        });
       }
       res.json({
        status: "error",
        message : "unable to add  transaction, please try again"
    });
       
        
    } catch (error) {
       
        next(error);
        
        
    }
})

router.delete("/", (req, res, next)  =>{
    try {
        
read.json({
    status: "success",
    message:"delete method to  do "
})
    } catch (error) {
        next(error)     
    }
} )

   
export default router;