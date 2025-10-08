import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { MyTasks } from './mytasks/mytasks';
import { ProgTrack } from './progtrack/progtrack';
import { Calendar } from './calendar/calendar';

export default function App() {
    return (
        <BrowserRouter>
            <div className="main-body">
                <header>
                    <h1 id="commonly-logo">Commonly</h1>
                    <nav class="nav-bar">

                        <ul>
                            <li>
                                <a href="progress_tracker.html">Progress Tracker</a>
                            </li>
                            <li>
                                <a href="calendar.html">Calendar</a>
                            </li>
                            <li>
                                <a href="mytasks.html">My Tasks</a>
                            </li>
                            <li>
                                <a href="index.html">Login</a>
                            </li>
                        </ul>
                        <h3>Username displayed here</h3>
                    </nav>
                </header>
                <div className="body bg-dark text-light">App will display here</div>
                <footer>
                    <div>
                        <h2>Database Placeholder</h2>
                        <p>The database will save and remember your chores.</p>
                        <h2>Web Socket Placeholder</h2>
                        <p>The Web Socket of this website will allow for collaboration on household chores by communicating with other
                            devices,
                            regularly updating the progress task bar based on others' work. </p>
                    </div>
                    Commonly (Footer Placeholder)
                </footer>
            </div>
        </BrowserRouter>
    );
}