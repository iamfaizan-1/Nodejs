// we write here the logic of api's

import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"

const registerUser =async (req,res)=>{

    const {userName,userEmail,userPassword} = req.body

const UserExists = await userModel.findOne({
   userEmail
}) 

if(UserExists){
    return res.status(409).json({
        message:"User already exists"
    })
}

    const user = await userModel.create({
        userName, userEmail, userPassword
    })

const token = jwt.sign({
    id:user._id
},process.env.JWT_SECRET)

res.cookie("token",token)



res.status(201).json({
    message:"user Created successfully ",
    user
    
})

}


export default {registerUser}