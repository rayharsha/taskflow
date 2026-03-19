import React, { useState } from 'react'
import "../styles/auth.css"
import useForgotPassword from '../lib/hooks/useForgetPassword';
const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const { forgotPassword } = useForgotPassword()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        forgotPassword(email)
    }
    return (
        <div className='auth-container'>
            <div className='auth-card'>
                <h2>forget Password</h2>
                <form
                    onSubmit={handleSubmit}>
                    <input type="email"
                        placeholder='enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button type='submit'>
                        send reset link
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword;