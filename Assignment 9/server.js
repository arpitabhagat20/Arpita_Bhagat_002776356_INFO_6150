require('dotenv').config()
const port = 8000;

const express = require('express')
const app = express()
const mongoDB = require('mongoose')
const cors = require('cors') 

mongoDB.connect('mongodb://0.0.0.0:27017/userdb', {
    //useNewUrlParser: true
})
mongoDB.connection
.once("open", () => console.log('Connected'))
.on("error", error => {
    console.log("MongoDB Error: " + error); 
})


app.use(express.json())
app.use(cors());

const userRouter = require('./routes/user')
app.use('/user', userRouter)

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})