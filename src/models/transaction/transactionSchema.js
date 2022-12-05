import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
transaction: {
        type: String,
        required: true
    },
  
    amount:{
        type: Number, 
        min: 0, // for the four digit reuirement
       
    }

},
{
timestamps:true
}

);

 export default mongoose.model("transaction1", transactionSchema)