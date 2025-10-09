import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { MyTasks } from './mytasks/mytasks';
import { ProgTrack } from './progtrack/progtrack';
import { Calendar } from './calendar/calendar';
import { Roommates } from './roommates/roommates';

export default function App() {
    return (
        <BrowserRouter>
            <div className="main-body">
                <header>
                    <h1 id="commonly-logo">Commonly</h1>
                    <nav className="nav-bar">

                        <ul>
                            <li>
                                <NavLink to="/progtrack">Progress Tracker</NavLink>
                            </li>
                            <li>
                                <NavLink to="/calendar">Calendar</NavLink>
                            </li>
                            <li>
                                <NavLink to="/mytasks">My Tasks</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        </ul>
                        <h3>Username displayed here</h3>
                    </nav>
                </header>
                <Routes>
                    <Route path='/login' element={<Login />} exact />
                    <Route path='/mytasks' element={<MyTasks />} />
                    <Route path='/progtrack' element={<ProgTrack />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path="/roommates" element={<Roommates />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
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
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}