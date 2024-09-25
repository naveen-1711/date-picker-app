'use client';

import React, { useEffect } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import Customization from './Customization';

import DateRangeSelector from './DateRangeSelector';
import useDateStore from '../store/useDateStore'; // Zustand state management

import './DatePicker.css';

const DatePicker = () => {
  const { startDate, endDate, recurrence, previewDates, setPreviewDates } = useDateStore();

  // Function to generate dates based on user input
  const generateDates = (start, end, recurrence) => {
    const dates = [];
    let currentDate = new Date(start);

    // Check if start and end are valid dates
    if (!start || !end || !(start instanceof Date) || !(end instanceof Date)) {
      console.error("Invalid dates provided.");
      return [];
    }

    const MAX_ITERATIONS = 1000; // Set a reasonable limit
    let iterations = 0;

    while (currentDate <= end) {
      if (iterations > MAX_ITERATIONS) {
        console.error("Maximum iterations reached. Possible infinite loop.");
        break; // Prevent infinite loop
      }
      dates.push(currentDate.toLocaleDateString());
      currentDate.setDate(currentDate.getDate() + (recurrence === 'weekly' ? 7 : 0));
      iterations++;
    }

    return dates;
  };

  // Effect to update preview dates whenever startDate, endDate, or recurrence changes
  useEffect(() => {
    if (startDate && endDate) {
      const dates = generateDates(startDate, endDate, recurrence);
      setPreviewDates(dates);
    }
  }, [startDate, endDate, recurrence, setPreviewDates]);

  return (
    <div className="date-picker bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-lg font-bold mb-4 text-white" >Select Recurring Dates</h2>
      <DateRangeSelector />
      <Customization />
      <RecurrenceOptions />
      
      
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2 text-white">Preview of Selected Dates:</h3>
        <ul className="list-disc pl-5 space-y-1">
          {previewDates.map((date, index) => (
            <li key={index} className="text-gray-700  hover:text-blue-500 transition duration-200">
              {date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DatePicker;
