const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.static("dist"))

app.use(cors({origin:'https://portfolio-ehrk.onrender.com' ,credentials:true}))

app.use("/api",require("./routes/My.routes"))

app.use("*",(req,res)=>{
    res.sendFile(path.join(_dirname,"dist","index.html"))
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open",()=>{
    console.log("mongo connected")
    app.listen(process.env.PORT,console.log("server running"))
})