import React, { useState, useRef } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const addTodo = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      setTodos([...todos, value]);
      inputRef.current.value = "";
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <TodoInput inputRef={inputRef} onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
