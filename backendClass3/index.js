import express from "express";
import cors from "cors"
const app = express();
const port = 3000;

app.use(cors())

let todos = []

app.listen(port, ()=>{
    console.log("server is running on port " + port);
})

app.get("/", (req, res)=>{
res.send("Hello world")

})


app.get("/todos", (req, res)=>{
res.json({
status: true,
message : "todos fetched successfully",
data : todos

})

})


