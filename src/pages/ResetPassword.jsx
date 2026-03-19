import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthService from "../lib/api/AuthService";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const { token } = useParams(); // get token from URL
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleReset = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const authService = new AuthService();
            const response = await authService.resetPassword(
                token, { password, confirmPassword }
            );
            toast.success(response.message || "Password reset successfully");

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (error) {
            toast.error();
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Reset Password</h2>

                <form onSubmit={handleReset}>
                    <input
                        className="input"
                        type="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="Enter new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button className="button" type="submit" disabled={isLoading}>
                        {isLoading ? <div className="spinner"></div> : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
