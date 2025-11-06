import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState } from './authState';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div className="white-box">
      <h2>Hello, {props.userName}!</h2>
      <button className="button" onClick={() => navigate('/progtrack')}>
        Go to Progress Tracker
      </button>
      <button className="button" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}