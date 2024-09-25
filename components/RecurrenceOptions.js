

import React from 'react';
import useDateStore from '../store/useDateStore';

const RecurrenceOptions = () => {
  const { setRecurrence } = useDateStore();

  const handleRecurrenceChange = (event) => {
    setRecurrence(event.target.value);
  };

  return (
    <div>
      <label>Recurrence:</label>
      <select onChange={handleRecurrenceChange}>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        {/* Add more options as needed */}
      </select>
      <div>
        <label>Every:</label>
        <input type="number" defaultValue={2} /> weeks
      </div>
    </div>
  );
};

export default RecurrenceOptions;
