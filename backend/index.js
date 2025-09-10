import express from "express"
const app = express()
import dotenv from "dotenv"
import connectDb from "./config/db.js"
dotenv.config()
const port = process.env.PORT || 5000


app.listen(port,()=>{
    connectDb()
    console.log("server is running")
})