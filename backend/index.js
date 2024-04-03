import dotenv from "dotenv"
dotenv.config()
import express from "express"
import mongoose from "mongoose"

import api from "../backend/Routes/api.route.js"

const app=express()
const port= process.env.PORT || 8080
const MONGODB_URL=process.env.MONGODB_URL

app.use(express.json())
//using api routes
app.use("/api", api)

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("Database connected");

    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`)
    })
})
.catch(()=>{
    console.log(err);
})


