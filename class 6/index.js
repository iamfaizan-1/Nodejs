// import e from "express";
// const app = e();

// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })

// app.use(e.urlencoded({extended:false}))
// // app.use(e.json())
// // app.use(e.urlencoded({extended:false}))
// // app.get("/",(req,res)=>{
// //     res.send("Hello world")
// // })

// // app.get("/about",(req,res)=>{
// //     res.send("This is about page")

// // })

// // app.get('/contact',(req,res)=>{
// //     res.send("This is contact page")
// // })

// // app.get("/user/:userid",(req,res)=>{
// //     res.send(req.params)
// // })
// // app.get("/user",(req,res)=>{
// //     res.send("welcome user")
// // })

// // app.get("/search",(req,res)=>{
// //     const name= req.query.name;
// //     const age = req.query.age;
// //     res.send(`The name is ${name} and age is ${age}`)
// // })


// // app.get("/",(req,res)=>{
// //     res.send(
// //         {
// //             name:"faizan",
// //             age:20
// //         }
// //     )
// // })

// // app.get("/user",(req,res)=>{
// //     res.json(
// //         {
// //             name:"faizan",
// //             age:20
// //         }
// //     )
// // })

// // app.get("/about",(req,res)=>{
// //     res.status(200).send("This is about page")
    
// // })

// // app.post("/about",(req,res)=>{
// //     res.send(req.body)
// // })


// // 8.june EJS template engine

// app.set("view engine","ejs")

// app.get("/",(req,res)=>{
//     res.send("WElcome to home page")
// })

// // app.get("/about",(req,res)=>{
// //     let fruits = ['Apple','Mango','Banana','cherry','grapes'];
// //     res.render("about",{
// //         title:'About Page',
// //         message:'welcome to EJS',
// //         items:fruits
// //     })
// // })


// app.get("/about",(req,res)=>{
   
//    let users = [
//     {name:"faizan",age:20,city:"Karachi"},
//     {name:"Ahmed",age:20,city:"Karachi"},
//     {name:"Abdul Rehman",age:20,city:"Karachi"}
//    ]
//     res.render('about',
//         {
//             title:"About Page",
//             message: "We are learning express js",
//             items:users
//         }
//     )
// })


// app.get('/contact',(req,res)=>{
// let info = [
//     {name:"faizan",contact:3323122},
//     {
//         name:"ahmed",contact:43231212
//     }
// ]


// res.render('contact',{
//     title:"contact page",
//     description: "This is a contact page",
//     information:info
// })
// })

// app.get("/form",(req,res)=>{
//     res.render("form",{
//          message:null
 
//     })
// })


// app.post("/submit",(req,res)=>{
// const name = req.body.myname;
// // const age = req.body.myage;
// // const email = req.body.myemail;

// const message = `Hello ${name} you submit the form`
// res.render("form",{

//     message:message
//     // age: age,
//     // email:email
// })
// })

import express from "express"
const app = express()

const notes=[]
app.use(express.json())

app.post("/notes",(req,res)=>{
notes.push(req.body)
res.status(201).json({
    message:"notes created successfully"
})

})


app.get("/notes",(req,res)=>{

    res.status(201).json({
        message:"notes fetched successfully",
        notes:notes
    })
})


app.delete("/notes/:index",(req,res)=>{
const index = req.params.index;
delete notes[index]

res.status(201).json({
    message:"note deleted successfully "
})

})

app.listen(3000,()=>{
    console.log("The server is running on port 3000")
})