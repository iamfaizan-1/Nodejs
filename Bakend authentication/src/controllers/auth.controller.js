// we write here the logic of api's

import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"

const registerUser =async (req,res)=>{

    const {userName,userEmail,userPassword} = req.body

    const user = await userModel.create({
        userName, userEmail, userPassword
    })

const token = jwt.sign({
    id:user._id
},process.env.JWT_SECRET)

res.cookie("userToken",token)



res.status(201).json({
    message:"user Created successfully ",
    user
    
})

}


export default {registerUser}