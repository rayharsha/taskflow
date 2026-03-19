import { toast } from "react-toastify";
import AppHTTPService from "../api/AppHTTPService";

const useVerifyEmail = () => {
    const authService = new AppHTTPService();
    const verifyEmail = async (token) => {
        try {
            if (!token) {
                toast.error("Invalid verification link", {
                    position: "bottom-right",
                });
                return;
            }
            await authService.verifyEmail(token);

        } catch (error) {
            toast.error(error.message, {
                position: "bottom-right",
            });
        }
    };

    return { verifyEmail };
};

export default useVerifyEmail;