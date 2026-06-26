import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    userName:String,
    userEmail:{
        type:String,
        unique:true,
        index:true
    },
    userPassword:String
})


const userModel = mongoose.model("user",userSchema)

export default userModel