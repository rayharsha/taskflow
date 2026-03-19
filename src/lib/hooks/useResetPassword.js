import { toast } from "react-toastify";
import AuthHTTPService from "../api/AuthHTTPService";

const useResetPassword = () => {
    const authService = new AuthHTTPService();

    const resetPassword = async (token, password) => {
        try {
            if (!token || !password) {
                toast.error("Invalid request", {
                    position: "bottom-right",
                });
                return;
            }
            const response = await authService.resetPassword({ token, password, confirmPassword });
            toast.success(response.message);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                error.response.data.message.map((error) => toast.error(error))
            } else {
                toast.error(error.message);
            }
        }
    };

    return { resetPassword };
};

export default useResetPassword;