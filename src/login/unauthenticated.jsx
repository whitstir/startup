import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

export function unauthenticated({userName: initialUserName, onLogin}) {
    const [userName, setUserName] = useState(initialUserName);
    const [password, setPassword] = useState('');

    function loginUser() {
        localStorage.setItem('userName', userName);
        onLogin(userName)
    }

    function createUser() {
        localStorage.setItem('userName', userName);
        onLogin(userName)
    }

    return (
        <main>
            <div className="white-box">
                <h1>Login</h1>
                <form>
                    <label htmlFor="first">Username:</label>
                    <input type="text" id="first" name="first" placeholder="Username or Email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" required />

                </form>
                <NavLink to="/progtrack">
                    <button className="button">Login</button>
                </NavLink>
                <div>
                    <a href="https://github.com/whitstir/startup.git">
                        <button className="button">Look at my GitHub!</button>
                    </a>
                </div>
            </div>
        </main>
    )
}
