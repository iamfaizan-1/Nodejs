import express from "express"
import jwt from "jsonwebtoken"
const router = express.Router()


router.post("/create",(req,res)=>{
   
   const token = req.cookies.token
   
//    checking if user has token

   if(!token){
 return   res.status(401).json({

    message:"unauthorized"
    })
   }

//    verifying the token is correct or not


try{
jwt.verify(token,process.env.JWT_SECRET)
}

catch(err){

    return res.status(401).json({
        message:"Token is invalid"
    })

}



   

    res.send("post created successfully")
})


export default router