import React, { useState } from 'react'
import "../styles/auth.css"
import useRegister from '../lib/hooks/useRegister';
const Register = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false)
    const { register } = useRegister();
    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // console.log(name, email, password);
        await register(credentials.name, credentials.email, credentials.password);
        setIsLoading(false);
    }
    return (
        <div className='auth-container'>
            <div className='auth-card'>
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        className="input"
                        placeholder="Name"
                        value={credentials.name}
                        onChange={(e) => setCredentials((prev) => ({
                            ...prev,
                            name: e.target.value
                        }))}
                    />
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
                    <button className="button" type="submit" disabled={isLoading}>
                        {isLoading ?
                            <div className='spinner'></div> : "register"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;
