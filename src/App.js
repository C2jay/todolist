import React, {useState} from 'react';
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";


function App() {
  const [todos, setTodos] = useState( [
    "finish plush project",
    "eat a cookie",
    "maul Henry",
    "drink coffee",
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };


  return (
  <div className="app">
    <div className="todo-list">
      <h1>~ My to-do list ~</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
  );
}


export default App;