import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EPICSearch() {
  const [epicData, setEPICData] = useState(null);

  const fetchEPICData = async () => {
    try {
      const response = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=kKSHGjiFgdVCGK3CcxyGLsxqKJnyGuIZaQAGpsnU`);
      setEPICData(response.data[0]);
    } catch (error) {
      console.error('Error fetching EPIC data:', error);
    }
  };

  useEffect(() => {
    fetchEPICData();
  }, []);

  return (
    <>
        <div className="pt-5 mb-8 font-mono text-3xl font-bold text-center md:text-5xl">Picture of the Earth</div>
        <div className="flex flex-col items-center mb-5">
            {epicData && (
                <div className="max-w-xs mb-20 md:max-w-6xl md:px-44">
                    <img src={`https://epic.gsfc.nasa.gov/archive/natural/${epicData.date.slice(0, 4)}/${epicData.date.slice(5, 7)}/${epicData.date.slice(8, 10)}/png/${epicData.image}.png`} alt={epicData.caption} className="mb-4 rounded-lg"/>
                    <h2 className="mb-2 font-mono text-xl font-bold">{epicData.caption}</h2>
                    <p className="font-sans text-justify text-gray-700">{epicData.date}</p>
                </div>
            )}
        </div>
    </>
  );
};
