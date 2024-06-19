/* eslint-disable react/prop-types */
import Todo from "../todo/todo";
import "./todo-list.style.css";


const TodoList = ({todo_list, functions})=>{
    
    return(
        <div className="todo-list">
            {
                todo_list.length != 0?
                todo_list.map((todo)=>{
                    return(
                        <Todo 
                            key = {todo.id}
                            todo = {todo}
                            functions = {functions}
                        />
                    )
                }): <h1>add a todo...</h1>
            }
        </div>
    )
}

export default TodoList;