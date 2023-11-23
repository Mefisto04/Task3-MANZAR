import React from 'react';
import './App.css';

const getTimeValue = (time) => {
  const [hour, ampm] = time.split(' ');
  const value = parseInt(hour, 10);
  return ampm === 'PM' ? value + 12 : value;
};

const Timetable = ({ timetable, onDelete }) => {
  const sortedTimetable = [...timetable].sort((a, b) => {
    const [startA] = a.time.split(' - ');
    const [startB] = b.time.split(' - ');
    return getTimeValue(startA) - getTimeValue(startB);
  });

  return (
    <div className="timetable-container">
      <h2>Timetable</h2>
      <ul>
        {sortedTimetable.map((event, index) => (
          <li key={index}>
            {event.title} : {event.time}
            <button className="delete-btn" onClick={() => onDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timetable;
