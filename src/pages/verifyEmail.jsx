import {  useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthService from "../lib/api/AuthService";
import { toast } from "react-toastify";

const VerifyEmail = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const hasVerified = useRef(false);
    const [isVerifying, setIsVerifying] = useState(false)
    const [isVerified, setIsVerified] = useState(false)

    const handleVerify = async () => {
        if (hasVerified.current) return;
        hasVerified.current = true
        setIsVerifying(true)
        try {
            const authService = new AuthService();
            const response = await authService.verifyEmail(token);

            toast.success(response.message || "Email verified successfully");
            setIsVerified(true)
            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (error) {
            toast.error("Email verification failed");
        } finally {
            setIsVerifying(false)
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Verifying your email...</h2>
                {!isVerified ? (
                    <>
                        <p>click the button below to verify your email address.</p>
                        <button onClick={handleVerify} disabled={isVerifying}>
                            {isVerifying ? "Verifying.." : "verify email"}
                        </button>
                    </>
                ) : (
                    <p>your email has been Verified! Redirecting to login...</p>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;