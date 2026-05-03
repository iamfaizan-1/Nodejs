import React from 'react'

const getTodos = async ()=>  {

try {
const response = await fetch('http://localhost:3000/todos')
const todos = await response.json()
console.log(todos)  
} catch (error) {
  console.log("error ==>",error)
}

}


function App() {
  

  const todos = getTodos();


  return (
    <div>

<h1>To do app</h1>
{
  todos ? (
    <div>


      todos fetched successfully
      </div>
  ) : (
  
  <div>

No todos available

      </div>)
}
    </div>
  )
}

export default App