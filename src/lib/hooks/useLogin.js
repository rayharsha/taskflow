import { toast } from "react-toastify"
import AuthService from "../api/AuthService"
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const authService = new AuthService();
    const navigate = useNavigate();
    const login = async (email, password) => {
        try {
            if (!email || !password) {
                toast.error("Email and password are required");
                return; 
            }
            const response = await authService.login({ email, password });
            localStorage.setItem("token", response.data);
            toast.success(response.message);
            navigate("/todos")
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                error.response.data.message.map((error) => toast.error(error))
            } else {
                toast.error(error.message);
            }
        }
    }

    return { login };
}

export default useLogin
