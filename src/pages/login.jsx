import React, { useState } from 'react'
import "../styles/auth.css"
import useLogin from '../lib/hooks/useLogin';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const { login } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(credentials);
        login(credentials.email, credentials.password);
    }
    return (
        <div className="auth-container">
            <div className='auth-card'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={(e) => setCredentials((prev) => ({
                            ...prev,
                            email: e.target.value
                        }))}
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) => setCredentials((prev) => ({
                            ...prev,
                            password: e.target.value
                        }))}
                    />
                    <button className="button" type="submit">Login</button>
                </form>
                <div className='auth-link'>
                    <a href="/forgetpassword">Forget Password?</a>
                </div>
            </div>
        </div>
    )
}

export default Login;