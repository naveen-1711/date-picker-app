

import React from 'react';
import useDateStore from '../store/useDateStore';

const DateRangeSelector = () => {
  const { setStartDate, setEndDate } = useDateStore();

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div>
      <label>Start Date:</label>
      <input type="date" onChange={handleStartDateChange} />
      <label>End Date (Optional):</label>
      <input type="date" onChange={handleEndDateChange} />
    </div>
  );
};

export default DateRangeSelector;
