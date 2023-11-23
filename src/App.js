import React, { useState } from 'react';
import Timetable from './Timetable';
import TimetableForm from './TimetableForm'
import './App.css';

const App = () => {
  const [timetable, setTimetable] = useState([]);

  const addEvent = (event) => {
    setTimetable([...timetable, event]);
  };

  const deleteEvent = (index) => {
    const updatedTimetable = [...timetable];
    updatedTimetable.splice(index, 1);
    setTimetable(updatedTimetable);
  };

  return (
    <div className="app-container">
      <h1>Dynamic Timetable</h1> <hr/>
      <TimetableForm onAdd={addEvent} /> <hr/>
      <Timetable timetable={timetable} onDelete={deleteEvent} />
    </div>
  );
};

export default App;
