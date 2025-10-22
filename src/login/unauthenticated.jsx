import React, { useState, useEffect } from 'react';

export function Unauthenticated({ userName: initialUserName, onLogin }) {
    const [userName, setUserName] = useState(initialUserName);
    const [password, setPassword] = useState('');

    useEffect(() => {
        setUserName(initialUserName || '');
        setPassword('');
    }, [initialUserName]);

    function loginUser() {
        localStorage.setItem('userName', userName);
        onLogin(userName);
    }

    return (
        <main>
            <div className="white-box">
                <h1>Login</h1>
                <form>
                    <label htmlFor="first">Username:</label>
                    <input
                        type="text"
                        id="first"
                        name="first"
                        placeholder="Username or Email"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                </form>
                <button className="button" onClick={loginUser} disabled={!userName || !password}>
                    Login
                </button>
                <div>
                    <a href="https://github.com/whitstir/startup.git">
                        <button className="button">Look at my GitHub!</button>
                    </a>
                </div>
            </div>
        </main>
    )
}
