import dotenv from "dotenv"
dotenv.config()
import express, { urlencoded } from "express"
import cors from "cors"
import mongoose from "mongoose"
import api from "../backend/Routes/api.route.js"
import cookieParser from "cookie-parser"
import { destructionCheck } from "./helpers/destructionCheck.js"

const app = express()

const allowedOrigins = [
    'https://privnote-plus.vercel.app',
    'http://localhost:5173',  // Vite default dev server
];

// Handle OPTIONS requests
app.options('*', cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
    exposedHeaders: ["set-cookie"],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

// CORS configuration
app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
    exposedHeaders: ["set-cookie"],
    preflightContinue: false,
    optionsSuccessStatus: 204
}))

app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended: true}))

//using api routes
app.use("/", api)

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.error("Database connection error:", err);
});

// Only start the server if we're not in a serverless environment
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
}

export default app;


