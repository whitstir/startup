import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState } from './authState';

export function Authenticated({ userName, onLogout }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    onLogout('', AuthState.Unauthenticated);
  }

  return (
    <div className="white-box">
      <h2>Hello, {userName}!</h2>
      <button className="button" onClick={() => navigate('/progtrack')}>
        Go to Progress Tracker
      </button>
      <button className="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}