// This file is used for creating the server

const express = require("express")
const noteModel = require("./models/note.model")
const app = express()
app.use(express.json())




app.post("/notes",async (req,res)=>{

    const data = req.body
 await   noteModel.create({
        title:data.title,
        description:data.description
    })


    res.status(201).json({
        message:"note created successfully"
    })
})


app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find()
    // return array of object


// const notes = await noteModel.find(
//     {
//         title:"2"
//     }
// )

// const notes = await noteModel.findOne({
//     title:"2"
// })


// find one returns and object while find returns an array

    res.status(201).json({
        message:"notes fetched successfully",
        notes:notes
    })

})


app.delete("/notes/:id",async (req,res)=>{

    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id:id
    })

    res.status(201).json({
        message:"note deleted successfully"
    })

})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const description = req.body.description
   await noteModel.findOneAndUpdate({_id:id},{description:description})

   res.status(201).json({
    message:"note updated successfully"
   })
})

module.exports = app 