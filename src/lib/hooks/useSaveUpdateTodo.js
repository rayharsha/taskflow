import { toast } from "react-toastify";
import TODOService from "../api/TODOService";

const useSaveUpdateTodo = () => {
    const todoService = new TODOService();
    const saveTodo = async (todo) => {
        try {
            if (!todo.title) {
                toast.error("Title is required!", {
                    position: 'bottom-right',
                });
            }
            await todoService.saveTodo(todo);
        } catch (error) {
            toast.error(error.message, {
                position: 'bottom-right',
            });
        }
    }
    const updateTodo = async (id, todo) => {
        try {
            if (!todo.title) {
                toast.error("Title is required!", {
                    position: 'bottom-right',
                });
            }

            await todoService.updateTodo(id, todo);
        } catch (error) {
            toast.error(error.message, {
                position: 'bottom-right',
            });
        }
    }
    return { saveTodo, updateTodo }
}

export default useSaveUpdateTodo
