const express = require('express')
const mongoose = require('mongoose')
const user = require('./controller/user.controller')
const app = express()

//middleware
app.use(express.json())

app.post('/',user.createUser)
app.get('/',user.userslist)

//database coonection
 mongoose.connect("mongodb://127.0.0.1:27017")

app.listen(3000,(error)=>{
    if(error){
        console.log("port error:",error)
    }else{
        console.log("Port successfully running on 3000")
    }
})