import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = 'todos';

const TodoServices = {
    //get todos

    getTodos: (): TodoTypes[] =>{
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return todoStr ? JSON.parse(todoStr) : [];
    },

    //adding todos
    addTodos: (text:string): TodoTypes => {
        const todos = TodoServices.getTodos();
        const newTodo: TodoTypes = {id: todos.length + 1, text, completed: false};

        const updatedTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
        return newTodo;
    },

    //update the todo
    updateTodo: (todo:TodoTypes): TodoTypes =>{
        const todos = TodoServices.getTodos();
        const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos))
        return todo;
    },

    //delete todo
    deleteTodo: (id:number): void => {
        const todos = TodoServices.getTodos();
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    }
}
  export default TodoServices;