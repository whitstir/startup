import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function Calendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCalendar() {
      try {
        const response = await fetch('/api/calendar');
        if (!response.ok) throw new Error(`API returned ${response.status}`);
        const data = await response.json();

        setEvents(data.events || []);
      } catch (err) {
        console.error('Failed to fetch calendar events:', err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCalendar();
  }, []);

  return (
    <main>
      <div className="white-box">
        <h1>Today in History</h1>
        {loading ? (
          <p>Loading events...</p>
        ) : events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <strong>{event.year}:</strong> {event.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No events found for today.</p>
        )}
      </div>
    </main>
  );
}
