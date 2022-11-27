import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from "morgan"

const app = express()
const PORT = process.env.PORT || 8000


// middle
app.use(morgan("dev"))
// app.use(helmet()) setting default security headers to protect some attacks 
//app.use(cors()) //allow cross orihin resources
app.use(express.json()) // clmvert income data in the req.body

// db connection 
import {connectDB} from "./src/config/dbConfig.js";
connectDB();
app.use("*", (req, res)  =>{
    res.json({
        message: "you are in the wrong place, yo, go back"
    })
} )



app.listen(PORT, error  =>{
    error? console.log(error):console.log(`your server is ready at http://localhost:${PORT}`)
} )