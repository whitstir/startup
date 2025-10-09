import React from 'react';
import { NavLink } from 'react-router-dom';

export function Roommates() {
  return (
    <main>
        <div className="white-box">
            <h1>Roomate Progress Tracker</h1>
            <ul>
                <li>Roommate 1 - Progress</li>
                <li>Roommate 2 - Progress</li>
                <li>Roommate 3 - Progress</li>
                <li>Roommate 4 - Progress</li>
                <li>Roommate 5 - Progress</li>
            </ul>
        </div>
    </main>
  );
}