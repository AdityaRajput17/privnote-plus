import dotenv from "dotenv"
dotenv.config()
import express, { urlencoded } from "express"
import cors from "cors"
import mongoose from "mongoose"
import api from "../backend/Routes/api.route.js"
import cookieParser from "cookie-parser"
import { destructionCheck } from "./helpers/destructionCheck.js"

const app=express()

const port= process.env.PORT || 8080
const MONGODB_URL=process.env.MONGODB_URL

app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended: true}))

//using api routes
app.use("/", api)

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("Database connected");

    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`)
    })

    destructionCheck.start()  // starting cron to check for expiry of notes every minute.
})
.catch((err) => {
    console.log(err)
})


