import express from "express";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.get("/about",(req,res)=>{
// res.redirect(301,"https://www.google.com")
// }
// )

app.get("/about",(req,res)=>{

    if(req.accepts("html")){
        res.send("<h1>This is html</h1>")
    }
    else if (req.accepts("json")){
        res.json({message:"this is json"})

}})

app.post("/about",(req,res)=>{

    res.json({
        status:true,
        message:"this is a post method",
        data: req.body
    })
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})