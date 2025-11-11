import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function ProgTrack({ userName = 'Guest' }) {
  const [chores, setChores] = useState([]);
  const [newChore, setNewChore] = useState('');

  useEffect(() => {
    async function fetchChores() {
      try {
        const response = await fetch('/api/chores');
        if (response.ok) {
          const choresFromDB = await response.json();
          setChores(choresFromDB);
        } else {
          console.error('Failed to fetch chores:', response.status);
        }
      } catch (err) {
        console.error('Error loading chores:', err);
      }
    }
    fetchChores();
  }, []);

  function addChore() {
    if (!newChore.trim()) {
      return;
    }
    setChores([...chores, { id: Date.now(), name: newChore }]);
    setNewChore('');
  }

  function deleteChore(id) {
    setChores(chores.filter((chore) => chore.id !== id));
  }

  return (
    <main>
      <div className="white-box">
        <h1>Progress Tracker</h1>
        <div className="progress-container">
          <div className="progress-box">Daily</div>
          <div className="progress-box">Weekly</div>
          <div className="progress-box">Monthly</div>
        </div>

        <div>
          <input type="text" placeholder='Add new chore' value={newChore} onChange={(e) => setNewChore(e.target.value)}></input>
          <button className="button" onClick={addChore}>Add</button>
        </div>

        <ul>
          {chores.map((chore) => (
            <li key={chore.id}>
              {chore.name}{' '}
              <button className="button" onClick={() => deleteChore(chore.id)}>Delete</button>
            </li>
          ))}
        </ul>

        <NavLink to="/roommates">
          <button className="button">Click here to see your roommates' progress!</button>
        </NavLink>
      </div>
    </main>
  );
}