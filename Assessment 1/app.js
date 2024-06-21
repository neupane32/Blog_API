require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose");
const Blog = require("./model/blog.model.js");
const bodyParser = require("body-parser")
const router = require('./routes/blog.routes.js')

const app = express()



//Middleware
app.use(bodyParser.json());

//routes
app.use('/api', router)



//connection for database i.e. mongodb
mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log("Successfully connected to mongodb.")
    app.listen(process.env.PORT, () => {
        console.log(`server is listening on PORT ${process.env.PORT}`)
    })
}).catch(() => {
    console.log("failed to connect with database.")
})
