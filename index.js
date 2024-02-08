require("dotenv").config()
const express = require("express")
const connectdb = require("./Connect/connectDB")
const router = require("./Router/handler")
const bodyParser = require("body-parser")

const app = express()

port = process.env.Port || 4500

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

app.use("/api/v1", router)

app.listen(port, () =>{
    connectdb();
    console.log(`server connected on ${port}`)
})