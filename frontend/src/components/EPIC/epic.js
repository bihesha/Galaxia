import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EPICSearch() {
  const [date, setDate] = useState('');
  const [epicData, setEPICData] = useState(null);

  const fetchEPICData = async (selectedDate) => {
    try {
      const response = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/${selectedDate}?api_key=kKSHGjiFgdVCGK3CcxyGLsxqKJnyGuIZaQAGpsnU`);
      setEPICData(response.data[0]);
    } catch (error) {
      // console.error('Error fetching EPIC data:', error);
    }
  };

  useEffect(() => {
    const currentDate = getCurrentDate();
    fetchEPICData(currentDate);
  }, []);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (date) {
      fetchEPICData(date);
    } else {
      const currentDate = getCurrentDate();
      fetchEPICData(currentDate);
    }
  };

  return (
    <>
        <div className="pt-5 mb-8 font-mono text-3xl font-bold text-center md:text-5xl">Picture of the Earth</div>
        <div className="flex flex-col items-center mb-5">
          <form onSubmit={handleSubmit} className="mb-4 mt-4">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mr-2 border border-gray-300 rounded px-4 py-2" />
            <button type="submit" className="bg-purple-500 hover:bg-purple-800 duration-500 text-white font-bold py-2 px-4 rounded">Search</button>
          </form>
          {epicData && (
            <div className="max-w-xs mb-20 md:max-w-6xl md:px-44">
              <img src={`https://epic.gsfc.nasa.gov/archive/natural/${epicData.date.slice(0, 4)}/${epicData.date.slice(5, 7)}/${epicData.date.slice(8, 10)}/png/${epicData.image}.png`} alt={epicData.caption} className="mb-4 rounded-lg" />
              <h2 className="mb-2 font-mono text-xl font-bold">{epicData.caption}</h2>
              <p className="font-sans text-justify text-gray-700">{epicData.date}</p>
            </div>
          )}
      </div>
    </>
  );
};
