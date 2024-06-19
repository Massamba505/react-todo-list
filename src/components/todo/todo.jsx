/* eslint-disable react/prop-types */
import "./todo.style.css";
import { useState } from "react";

const Todo = ({ todo, functions }) => {
  const [editMode, setEditMode] = useState(false);

  const Edit = ({ todo }) => {
    const [newTodo, setNewTodo] = useState(todo.todo);

    const handleSave = () => {
      functions.onEdit(todo.id, newTodo);
      setEditMode(false); // Exit edit mode after saving
    };

    return (
      <div className="editTodo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div>
          <button onClick={handleSave}>💾</button>
          <span className="tooltiptext">Save</span>
        </div>
        <div>
          <button onClick={() => setEditMode(false)}>🚫</button>
          <span className="tooltiptext">Cancel</span>
        </div>
      </div>
    );
  };

  const Normal = ({ todo, functions }) => {
    return (
      <div className="todo">
      {
        todo.done?<span className="done">{todo.todo}</span>:<span>{todo.todo}</span>
      }
        <div className="crud">
          <div>
            <div onClick={() => functions.onDone(todo.id)}>✅</div>
            <span className="tooltiptext">Mark as done</span>
          </div>
          <div>
            <div onClick={() => functions.onDelete(todo.id)}>❌</div>
            <span className="tooltiptext">Delete todo</span>
          </div>
          <div>
            <div onClick={() => setEditMode(true)}>📝</div>
            <span className="tooltiptext">Edit todo</span>
          </div>
        </div>
      </div>
    );
  };

  return(
    <>
        {
            editMode? 
                (<Edit todo={todo} />)
            : 
            (<Normal todo={todo} functions={functions} />)
        }
    </>
  )
}

export default Todo;

