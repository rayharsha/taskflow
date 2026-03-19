import { toast } from "react-toastify";
import AuthService from "../api/AuthService";

const useForgotPassword = () => {
      const authService = new AuthService();

    const forgotPassword = async (email) => {
        try {

            if (!email) {
                toast.error("Email is required", {
                    position: "bottom-right",
                });
                return;
            }

            const response = await authService.forgetPassword({ email });
            console.log(response);
            toast.success(response.message);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                error.response.data.message.map((error) => toast.error(error))
            } else {
                toast.error(error.message);
            }
        }
    };

    return { forgotPassword };
};

export default useForgotPassword;