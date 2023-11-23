
import React from 'react';
import OrganizedTimetable from './OrganizedTimetable';
import './App2.css'; 

const App2 = () => {
  const timetableData = [
    ['9:00 AM - 10:00 AM', 'Math', 'English', 'Break', 'Physics', 'Chemistry'],
    ['10:00 AM - 11:00 AM', 'History', 'Geography', 'Break', 'Biology', 'Music'],
    ['11:00 AM - 12:00 PM', 'Computer Science', 'Physical Education', 'Lunch', 'Spanish', 'Art'],
  ];
  return (
    <div className="app-container">
      <h1>Well-Organized Timetable</h1>
      <OrganizedTimetable timetableData={timetableData} />
    </div>
  );
};

export default App2;
