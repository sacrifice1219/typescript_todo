import { Dispatch, SetStateAction, useState } from "react";
import TodoServices from "../TodoService";
import TodoTypes from "../todo";
import '../CSS/TodoForm.css';

interface PropTypes {
    setTodos : Dispatch<SetStateAction<TodoTypes[]>>
}

const TodoForm:React.FC<PropTypes> = ({setTodos}) =>{

    const [newTodoText, setNewTodoText] =useState<string>("");

    const handleAddTodo = () => {
        if(newTodoText.trim() != ''){
            const newTodo = TodoServices.addTodos(newTodoText);
            setTodos((prevTodo) => [...prevTodo, newTodo])
            setNewTodoText('')
        }
    }

    return (
        <div className="inputForm">
            <input type="type" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} autoFocus={true} placeholder="Add a Task"/>
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}

export default TodoForm;