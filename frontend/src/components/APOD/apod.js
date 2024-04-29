import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function APODSearch() {
  const [date, setDate] = useState('');
  const [apodData, setAPODData] = useState(null);

  const fetchAPODData = async (selectedDate) => {
    try {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=kKSHGjiFgdVCGK3CcxyGLsxqKJnyGuIZaQAGpsnU&date=${selectedDate}`);
      setAPODData(response.data);
    } catch (error) {
      console.error('Error fetching APOD data:', error);
    }
  };

  // get the current date
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const currentDate = getCurrentDate();
    fetchAPODData(currentDate);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (date) {
      fetchAPODData(date);
    } else {
      const currentDate = getCurrentDate();
      fetchAPODData(currentDate);
    }
  };

  return (
    <>
        <div className="pt-5 font-mono md:text-5xl text-3xl font-bold text-center">A Picture of the Day</div>
        <div className="flex flex-col items-center mb-5">
            <form onSubmit={handleSubmit} className="mb-4 mt-4">
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mr-2 border border-gray-300 rounded px-4 py-2" />
                <button type="submit" className="bg-purple-500 hover:bg-purple-800 duration-500 text-white font-bold py-2 px-4 rounded">Search</button>
            </form>
            {apodData && (
                <div className="md:max-w-6xl md:px-44 max-w-xs mb-20">
                    <img src={apodData.url} alt={apodData.title} className="mb-4 rounded-lg"/>
                    <h2 className="text-xl font-bold mb-2 font-mono">{apodData.title}</h2>
                    <p className="text-gray-700 font-sans text-justify">{apodData.explanation}</p>
                </div>
            )}
        </div>
    </>
  );
};
