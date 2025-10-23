import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function MyTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (newTask.trim() === '') {
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <main>
      <div className="white-box">
        <h1>My Tasks</h1>

        <div className="task-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="button" onClick={addTask}>Add</button>
        </div>

        <ul>
          {tasks.length === 0 ? (
            <li>No reminders yet... add one above!</li>
          ) : (
            tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button
                  className="button"
                  onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}