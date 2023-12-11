const user = require('../model/users.model')

const  createUser = async(req,res) =>{
    console.log("req",req.body);
let createduser = await user.create({
    name:req.body.name,
    phone:req.body.phone,
    email:req.body.email,
    date:req.body.date,
})
return res.json({
    success:true,
    result:createduser
})
}
const userslist = async(req,res)=>{
let userslist = await user.find()
return res.json({
    success:true,
    result:userslist
})
}

module.exports ={
    userslist,
    createUser
}
