import React, {useState} from 'react';
import TodoItem from "./components/TodoItem";


function App() {
  const [todos, setTodos] = useState( [
    "finish plush project",
    "eat a cookie",
    "maul Henry",
    "drink coffee",
  ])


  return (
  <div>
    <h1>~ My to-do list ~</h1>
    {todos.map((todo, index) => (
      <TodoItem todo={todo} key={index} />
    ))}
  </div>
  );
}


export default App;