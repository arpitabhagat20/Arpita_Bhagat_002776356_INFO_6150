require('dotenv').config()

const express = require('express')
const app = express()
//connect to mongoDB
const mongoDB = require("mongoose")
mongoDB.connect('mongodb://0.0.0.0:27017/userdb', {
    //useNewUrlParser: true
})
mongoDB.connection
.once("open", () => console.log('Connected'))
.on("error", error => {
    console.log("MongoDB Error: " + error); 
})

app.use(express.json())

const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.listen(3000, () => console.log('Server Started'))