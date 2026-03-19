import { toast } from "react-toastify";
// import AuthHTTPService from "../api/AuthHTTPService";
import { useNavigate } from "react-router-dom";
import AppHTTPService from "../api/AppHTTPService";
import AuthService from "../api/AuthService";

const useRegister = () => {
   const authService = new AuthService();
    const navigate = useNavigate();
    const register = async (name, email, password) => {
        try {

            if (!name || !email || !password) {
                toast.error("All fields are required", {
                    position: "bottom-right",
                });
                return;
            }
            const response = await authService.register({ name, email, password });
            console.log(response);
            toast.success(response.message);
            // await authService.register({ name, email, password });

        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                error.response.data.message.map((error) => toast.error(error))
            } else {
                toast.error(error.message);
            }
        }
    };

    return { register };
};

export default useRegister;