import express from "express";

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


let users=[]

app.get("/", (req, res) => {
  res.send(new Date().toString());
});

app.post("/users",(req,res)=>{
 
 users.push({...req.body, id:Date.now().toString(36)})
 
  res.json(

{
  user:req.body, 
  message:"post request "
}

  )

  console.log("request ==>",req.body)
})


app.get("/users",(req,res)=>{
  res.send(users)
})


app.delete("/users/:id",(req,res)=>{
  const {id} = req.params;
 users = users.filter((user)=>user.id !== id)

 res.json({message:"user deleted successfully"})
})
