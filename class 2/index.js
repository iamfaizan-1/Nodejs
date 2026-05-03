
const express = require ('express');
const app = express();

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})


app.get('/',(req,res)=>{
    res.send('Hello world, this is faizan')
})
 
// routing

app.get('/about',(req,res)=>{
    res.send('This is about page')
})

app.get('/contact/:id',(req,res)=>{
    res.send("contact id:"+  req.params.id)
})

app.get('/user/:userid/book/:bookid',(req,res)=>{
    res.send("user id: "+ req.params.userid +  "book id:"+req.params.bookid)
})

//query parameters

app.get('/search',(req,res)=>{
    const name = req.query.name;
    const age  = req.query.age;
res.send(`name: ${name} age: ${age}`)

})