import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const months = [
  'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
  'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
];

const MonthYearCarousel = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <button
        onClick={handlePrev}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="text-2xl font-semibold w-48 text-center">
        {months[month]} {year}
      </div>

      <button
        onClick={handleNext}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default MonthYearCarousel;
