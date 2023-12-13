import React, { useState } from 'react';
import LoginLogo from './LoginLogo';
import { useNavigate } from 'react-router-dom';



function LoginPage() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');


    function auth(login, password) {
        fetch('/login/auth', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

            body: JSON.stringify({
                "username": login,
                "password": password
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login or Password is invalid');
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('token', data.token)
                localStorage.setItem('loggedAs', data.username)
                navigate('/')
            })
            .catch(error => {
                setErrorMessage(error.message);

            });
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <LoginLogo />
                {errorMessage && <div className="fail">{errorMessage}</div>}
                <div className="login-inputs">
                    <input className="login-input" placeholder='Username'
                        value={login}
                        onChange={e => setLogin(e.target.value)} />
                    <input className="login-input" type="password" placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button
                        className="login-button"
                        onClick={() => auth(login, password)}
                    >Login
                    </button>

                </div>
            </div>

        </div>
    )

};

export default LoginPage;