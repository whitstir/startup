import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

export function Roommates() {
  const [roommates] = useState([
    { name: 'Whitney', progress: '80%'},
    { name: 'Allie', progress: '50%'},
    { name: 'Blair', progress: '65%'},
    { name: 'Lydia', progress: '15%'},
    { name: 'Victoria', progress: '30%'},
  ]);

  return (
    <main>
        <div className="white-box">
            <h1>Roomate Progress Tracker</h1>
            <p>Check how your roommates are doing with their chores:</p>
            <ul>
                {roommates.map((roommate, index) => (
                  <li key={index}>
                    {roommate.name} - {roommate.progress} complete
                  </li>
                ))}
            </ul>
        </div>
    </main>
  );
}