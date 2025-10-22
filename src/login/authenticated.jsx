import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function Authenticated({ userName, onLogout }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    onLogout();
  }

  return (
    <div>
      <h2>Hello, {userName}!</h2>
      <Button onClick={() => navigate('/progtrack')}>
        Go to Progress Tracker
      </Button>{' '}
      <Button onClick={logout}>
        Logout
      </Button>
    </div>
  );
}