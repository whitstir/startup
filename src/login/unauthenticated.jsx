import React, { useState, useEffect } from 'react';

export function Unauthenticated(props) {
    const [userName, setUserName] = useState(props.userName || '');
    const [password, setPassword] = useState('');
    const [displayError, setDisplayError] = useState(null);

    useEffect(() => {
        setUserName(props.userName || '');
        setPassword('');
    }, [props.userName]);

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
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
                <button className="button" onClick={() => loginUser()} disabled={!userName || !password}>
                    Login
                </button>
                <button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
                    Create
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
