import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from "morgan"

const app = express()
const PORT = process.env.PORT || 8000


// middle
app.use(morgan("dev"))
// app.use(helmet()) setting default security headers to protect some attacks 
app.use(cors()) //allow cross orihin resources
app.use(express.json()) // convert income data in the req.body

// db connection 
import {connectDB} from "./src/config/dbConfig.js";
connectDB();

// router
import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/user", userRouter);


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