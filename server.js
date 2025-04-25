const express = require("express")
const dotEnv = require('dotenv')
const {MongoClient} = require("mongodb")

const app = express()

dotEnv.config()

MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected successfully")
})
.catch((error)=>{
    console.log("Error: ",error)
})

const PORT = 5000;



app.listen(PORT,()=>{
    console.log(`Server started and running at PORT No: ${PORT}`);
})