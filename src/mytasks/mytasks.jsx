import React from 'react';
import { NavLink } from 'react-router-dom';

export function MyTasks() {
  return (
    <main>
        <div className="white-box">
            <h1>My Tasks</h1>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
                <li>Task 4</li>
                <li>Task 5</li>
            </ul>
        </div>
    </main>
  );
}