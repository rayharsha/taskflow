import routes from "../config/apiRoutes";
import AppHTTPService from "./AppHTTPService";
class TODOService {

    constructor() {
        this.httpService = new AppHTTPService();
    }

    async saveTodo(todo) {
        return this.httpService.post(routes.todos.SAVE_TODO, todo);
    }

    async updateTodo(id, todo) {
        return this.httpService.put(`${routes.todos.UPDATE_TODO}/${id}`, todo);
    }

    async deleteTodo(id) {
        return this.httpService.delete(`${routes.todos.DELETE_TODO}/${id}`);
    }

    async getTodo(id) {
        return this.httpService.get(`${routes.todos.GET_TODO}/${id}`)
    }

    async getAllTodo() {
        return this.httpService.get(routes.todos.GET_TODOS)
    }

}

export default TODOService;