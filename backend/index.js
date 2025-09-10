import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 5000


app.listen(port,()=>{
    console.log("server is running")
})