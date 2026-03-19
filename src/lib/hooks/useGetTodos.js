import { toast } from "react-toastify";
import TODOService from "../api/TODOService";

const useGetTodos = () => {
    const todoService = new TODOService();
    const getTodo = async (id) => {
        try {
            if (!id) {
                toast.error('Todo id is required', {
                    position: 'bottom-right',
                });
            }

            await todoService.getTodo(id, todo);
        } catch (error) {
            toast.error(error.message, {
                position: 'bottom-right',
            });
        }
    }
    const getAllTodos = async () => {
        try {
            await todoService.getTodo(id, todo);
        } catch (error) {
            toast.error(error.message, {
                position: 'bottom-right',
            });
        }
    }
    return { getTodo, getAllTodos };
}
export default useGetTodos;