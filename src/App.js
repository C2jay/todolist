import React, {useState} from 'react';
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";


function App() {
  const [todos, setTodos] = useState( [
    {text:"finish plush project", isCompleted: false},
    {text:"eat a cookie", isCompleted: false},
    {text:"maul Henry", isCompleted: false},
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  return (
  <div className="app">
    <div className="todo-list">
      <h1>~ My to-do list ~</h1>
      {todos.map((todo, index) => (
        <TodoItem 
        todo={todo} 
        key={index} 
        index={index} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
  );
}


export default App;