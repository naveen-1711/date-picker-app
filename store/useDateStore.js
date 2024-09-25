import { create } from 'zustand';

const useDateStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrence: 'weekly', // default value
  previewDates: [],
  
  setStartDate: (date) => set({ startDate: new Date(date) }),
  setEndDate: (date) => set({ endDate: new Date(date) }),
  setRecurrence: (recurrence) => set({ recurrence }),
  setPreviewDates: (dates) => set({ previewDates: dates }), // Ensure this is present
}));

export default useDateStore;
