import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function ProgTrack({ userName = 'Guest'}) {
  const [chores, setChores] = useState([]);
  const [newChore, setNewChore] = useState('');

  useEffect(() => {
    const savedChores = JSON.parse(localStorage.getItem(`${userName}-chores`)) || [];
    setChores(storedChores);
  }, [userName]);

  return (
    <main>
      <div  className="white-box">
        <h1>Progress Tracker</h1>
        <div className="progress-container">
        <div className="progress-box">Daily</div>
        <div className="progress-box">Weekly</div>
        <div className="progress-box">Monthly</div>
        </div>
            <p>Use this Progress Tracker to stay on top of all your chores and personal tasks! </p>
            <NavLink to="/roommates">
                <button className="button">Click here to see your roommates' progress!</button>
            </NavLink>
      </div>
    </main>
  );
}