import '../styles/todo.css'
import { useState } from 'react'
const Todo = () => {

    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);
    const [editingId, setEditingId] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Date.now(),
            title
        };

        setTodos([...todos, newTodo]);
        setTitle("");
    }

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    const handleEdit = (id) => {
        const todo = todos.find(t => t.id === id);
        setTitle(todo.title);
        setEditingId(id)
        // handleDelete(id);
    }

    return (

        <div className="todo-container">

            <h1>My Todos</h1>

            <form onSubmit={handleSubmit} className="todo-form">

                <input
                    placeholder="Enter todo..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button type="submit">
                    Add
                </button>

            </form>

            <div className="todo-list">

                {todos.map((todo) => (

                    <div className="todo-item" key={todo.id}>

                        <span>{todo.title}</span>

                        <div className="todo-actions">

                            <button onClick={() => handleEdit(todo.id)}>
                                Edit
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(todo.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todo
