import DatePicker from '../components/DatePicker';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to the Date Picker App!
      </h1>
      <DatePicker />
    </div>

  );
}
