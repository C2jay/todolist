import React from 'react';
import TodoItem from "./components/TodoItem";


function App() {
  return (
  <div>
    <h1>~ My to-do list ~</h1>
    <TodoItem todo="finish plus project."/>
    <TodoItem todo="eat a cookie."/>
    <TodoItem todo="maul henry."/>
  </div>
  )
}


export default App;