import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function authenticated({ userName, onLogout }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    onLogout();
  }

  return (
    <div>
      <h2>Hello, {userName}!</h2>
      <button className="button" Click={() => navigate('/progtrack')}>
        Go to Progress Tracker
      </button>
      <button className="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}