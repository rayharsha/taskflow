const  baseAuthEndPoint = "/v1/auth"
const  baseEndPoint = "/v1/todos"
const routes = {
    auth: {
        LOGIN: `${baseAuthEndPoint}/login`,
        REGISTER: `${baseAuthEndPoint}/register`,
        VERIFY_EMAIL: `${baseAuthEndPoint}/verify-email`,
        FORGET_PASSWORD: `${baseAuthEndPoint}/forget-password`,
        RESET_PASSWORD: `${baseAuthEndPoint}/reset-password`,
    },
    todos: {
        SAVE_TODO: `${baseEndPoint}/save`,
        UPDATE_TODO: `${baseEndPoint}/update`,
        DELETE_TODO: `${baseEndPoint}/delete`,
        GET_TODO: `${baseEndPoint}/`,
        GET_TODOS: `${baseEndPoint}/`,
    }

}
export default routes;