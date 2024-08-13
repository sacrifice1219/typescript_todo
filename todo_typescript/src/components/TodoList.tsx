import { useState } from "react";
import TodoTypes from "../todo";
import TodoServices from "../TodoService";

const TodpList = () =>{
    const [todos, setTodos] = useState<TodoTypes[]>(TodoServices.getTodos());
    const [editingTodoId, setEditingTodoId] = useState< number | null>(null);
    const [editedTodoText, setEditedTodoText] = useState<string >("")

    const handleEditStart = (id:number, text:string) =>{
        setEditingTodoId(id);
        setEditedTodoText(text);
    };

    const handleEditCancel = () =>{
        setEditingTodoId(null);
        setEditedTodoText('');
    };

    const handleEditSave =(id:number) =>{
        if(editedTodoText.trim() !== ''){
            const updatedTodo = TodoServices.updateTodo({
                id,
                text:editedTodoText,
                completed:false
            });
            setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo)))
            setEditingTodoId(null)
            setEditedTodoText('')
        }
    };


    const handleDeleteTodo = (id:number) => {
        TodoServices.deleteTodo(id);
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    };
    
    return (
        <div className="todoContainer">
            <div>
                {/* todo input from component goes here */}
            </div>

            {todos.map((todo) =>(
                <div className="items" key={todo.id}>
                    {editingTodoId == todo.id ? (
                        <div className="editedText">
                            <input type="text" value={editedTodoText} onChange={(e) => setEditedTodoText(e.target.value)} autoFocus={true}/>
                            </div>
                    )}
                    </div>
            ))}
        </div>
    )
}
export default TodpList;