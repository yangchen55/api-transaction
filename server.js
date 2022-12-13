import dotenv from "dotenv"
dotenv.config();
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from "morgan"

// db connection np
import {connectDB} from "./src/config/dbConfig.js";
connectDB();

// routers 
import userRouter from "./src/routers/userRouter.js";
import transRouter from "./src/routers/transRouter.js"
import {isAuth} from './src/middleware/authmiddleware.js';
import path from 'path'

const app = express()
const PORT = process.env.PORT || 8000
console.log(process.env.MONGO_CLIENT);


// middle
app.use(morgan("dev"))
// app.use(helmet()) setting default security headers to protect some attacks 
app.use(cors()) //allow cross orihin resources
app.use(express.json()) // convert income data in the req.body

// to create absolute path 
const  __dirname = path.resolve()
// console.log(__dirname);
// to join client and build
app.use(express.static(path.join(__dirname, "/client/build")))





app.use("/api/v1/user", userRouter);
app.use("/api/v1/transaction", isAuth, transRouter);

app.use("/", (req, res)  => {
    res.sendFile(path.join(__dirname, "/build/index.html"))

})
app.use("*", (req, res)  =>{
    res.json({
        status: "error",   
        message: "404 page not found!"
    })

} )

// global error handler 
app.use((error, req, res, next)  => {
console.log(error)
    const code = error.code ||  500
    res.status(code).json({
        status:"error",
        message: error.message
    })
})


app.listen(PORT, error  =>{
    error? console.log(error):console.log(`your server is ready at http://localhost:${PORT}`)
} )