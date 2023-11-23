import React, { useState } from 'react';
import './App.css'; 

const TimetableForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [startAmPm, setStartAmPm] = useState('AM');
  const [endTime, setEndTime] = useState('');
  const [endAmPm, setEndAmPm] = useState('AM');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      time: `${startTime} ${startAmPm} - ${endTime} ${endAmPm}`,
    };
    onAdd(newEvent);
    setTitle('');
    setStartTime('');
    setStartAmPm('AM');
    setEndTime('');
    setEndAmPm('AM');
  };

  return (
    <div className="timetable-form-container">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Start Time:
          <input
            type="number"
            min="1"
            max="12"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <select value={startAmPm} onChange={(e) => setStartAmPm(e.target.value)}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </label>
        <label>
          End Time:
          <input
            type="number"
            min="1"
            max="12"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
          <select value={endAmPm} onChange={(e) => setEndAmPm(e.target.value)}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TimetableForm;
