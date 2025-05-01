import dotenv from "dotenv"
dotenv.config()
import express, { urlencoded } from "express"
import cors from "cors"
import mongoose from "mongoose"
import api from "../backend/Routes/api.route.js"
import cookieParser from "cookie-parser"
import { destructionCheck } from "./helpers/destructionCheck.js"

const app=express()

// Handle OPTIONS requests
app.options('*', cors({
    origin: 'https://privnote-plus.vercel.app',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
    exposedHeaders: ["set-cookie"],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

// CORS configuration
app.use(cors({
    origin: 'https://privnote-plus.vercel.app',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
    exposedHeaders: ["set-cookie"],
    preflightContinue: false,
    optionsSuccessStatus: 204
}))

const port= process.env.PORT || 8080
const MONGODB_URL=process.env.MONGODB_URL

app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended: true}))

//using api routes
app.use("/", api)

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Internal Server Error",
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});


mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("Database connected");

    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`)
    })

    /*destructionCheck.start()*/
})
.catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
})


