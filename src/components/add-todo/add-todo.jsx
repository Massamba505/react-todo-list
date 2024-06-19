/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./add-todo.style.css";

function AddTodo ({ onAddTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAddTodo(input);
      setInput(""); // Clear input after adding
    }
  };

  return (
    <div className="todo-tab">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write todo..."
      />
      <button onClick={(e)=>{handleAdd()}}>➕</button>
    </div>
  );
}

export default AddTodo;
