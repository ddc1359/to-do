import React from "react";

function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ marginTop: "10px" }}>
          {todo}
          <button
            onClick={() => onDelete(index)}
            style={{ marginLeft: "10px" }}
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
