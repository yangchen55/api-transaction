import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
   
   transaction: {
        type: String,
        required: true
    },
    type:{
        type:String,
        required:true
    },
  
    amount:{
        type: Number, 
        min: 0, 
       
    },
    // in mongodb  user id will be object 
    userId:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required:true
        


    }

},
{
timestamps:true
}

);

 export default mongoose.model("transaction1", transactionSchema)