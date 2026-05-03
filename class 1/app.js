 console.log("Hello world");
 const fs = require("fs");

//  const text = fs.readFileSync("./text.txt","utf-8")
//  console.log(text);

// fs.writeFileSync("./text.txt","This is the updated text")
 
// const updatedText = fs.readFileSync("./text.txt","utf-8")

// fs.appendFileSync("./text.txt","\nThis is the appended text")

// console.log(updatedText)


// const text = fs.readFileSync("./text.txt","utf-8")
// console.log(text);
// fs.rmdirSync("./newDir")


const http = require("http")

const server = http.createServer((req,res)=>{
 
  if(req.url === "/"){
      res.end("Hello from the server")
  }
  else if(req.url === "/about"){
      res.end("This is the about page")
  }
  else if(req.url === "/products"){
    res.end("This is the products page")
}
else{
res.end("Page not found")
}
}
)
server.listen(4000,"127.0.0.1",()=>{
    console.log("Server is running on port 4000")
}

)