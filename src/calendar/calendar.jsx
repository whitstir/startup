import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function Calendar() {
  const [nameday, setNameday] = useState('');

  useEffect(() => {
    async function fetchNameday() {
      try {
        const response = await fetch('https://nameday.abalin.net/api/V1/today');
        const data = await response.json();
        
        setNameday(data.data.name_days.us);
      } catch (err) {
        console.error('Failed to fetch nameday', err);
        setNameday('Could not load nameday');
      }
    }

    fetchNameday();
  }, []);

    return (
    <main>
      <div className="white-box">
        <h1>Calendar</h1>
        <p>Today’s nameday (US): <strong>{nameday || 'Loading...'}</strong></p>
        <img src="towfiqu-barbhuiya-bwOAixLG0uc-unsplash.jpg" height={300} alt="calendar"/>
      </div>
    </main>
  );
}
