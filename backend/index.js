import express from "express"
const app = express()
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import cookieParser from "cookie-parser"
dotenv.config()
const port = process.env.PORT || 5000

app.use(cors,{
    origin:"http://localhost:5173",
    withCredentials:true
})
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)

app.listen(port,()=>{
    connectDb()
    console.log("server is running")
})