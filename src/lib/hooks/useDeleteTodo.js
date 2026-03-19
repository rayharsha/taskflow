import { toast } from "react-toastify";
import TODOService from "../api/TODOService";

 const deleteTodo = async (id) => {
     const todoService = new TODOService();
        try {
            if (!id) {
                toast.error("Todo id is missing", {
                    position: 'bottom-right',
                });
            }
            await TODOService.deleteTodo(id);
        } catch (error) {
            toast.error(error.message, {
                position: 'bottom-right',
            });
        }
    }
return deleteTodo;