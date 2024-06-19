import './App.css';
import AddTodo from "./components/add-todo/add-todo";
import TodoList from "./components/todo-list/todo-list";
import { useState } from 'react';

function App() {
  const [todo_list, setTodo_list] = useState([]);

  function handleAddTodo(input) {
    const id = todo_list.length > 0? todo_list[todo_list.length - 1].id + 1 : 1;
    const newTodo = {
      id,
      todo: input,
      done:false
    };
    setTodo_list([...todo_list, newTodo]);
  }

  function handleDelete(id){
    const newTodo_list = todo_list.filter(todo=>todo.id != id);
    setTodo_list(newTodo_list);
  }

  function handleEdit(id, newTodo){
    const newTodo_list = todo_list.map((todo)=>{
      if(todo.id == id){
        todo.todo = newTodo;
      }
      return todo;
    });

    setTodo_list(newTodo_list);    
  }

  function handleDone(id){
    const newTodo_list = todo_list.map((todo)=>{
      if(todo.id == id){
        todo.done = !todo.done;
      }
      return todo;
    });

    setTodo_list(newTodo_list);
  }

  return (
    <>
      <h1>Todo List ✏️</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        functions = {{
          onDelete : handleDelete,
          onEdit : handleEdit,
          onDone : handleDone,
        }}
        
        todo_list = {todo_list}
      />
    </>
  );
}

export default App;
