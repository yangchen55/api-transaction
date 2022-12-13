import mongoose from "mongoose";

 export const connectDB = () => {
    try{
       
        // const connStr = 'mongodb://localhost:27017/transaction'
        // mongodb+srv://transaction:<password>@cluster0.k4qvjoj.mongodb.net/?retryWrites=true&w=majority
        const conn = mongoose.connect(process.env.MONGO_CLIENT);
        conn ? console.log("mongo connected"):console.log("unable to connect Mongo");;
    } catch (error){
        console.log(error);
    }
};