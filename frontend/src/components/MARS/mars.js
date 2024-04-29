import React, { useState, useEffect } from 'react';
import axios from 'axios';
import marsimage1 from '../../Images/marsimage1.jpg';
import marsimage2 from '../../Images/marsimage2.jpg';
import marsimage3 from '../../Images/marsimage3.jpg';

export default function Mars() {
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState('');
  const [sol, setSol] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchCameras();
  }, []);

  const fetchCameras = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity', {
        params: {
          api_key: 'kKSHGjiFgdVCGK3CcxyGLsxqKJnyGuIZaQAGpsnU',
        },
      });
      setCameras(response.data.rover.cameras);
      setSelectedCamera(response.data.rover.cameras[0].name);
    } catch (error) {
      console.error('Error fetching cameras:', error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
        params: {
          api_key: 'kKSHGjiFgdVCGK3CcxyGLsxqKJnyGuIZaQAGpsnU',
          sol: sol,
          camera: selectedCamera,
        },
      });
      setImages(response.data.photos);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sol && selectedCamera) {
      fetchImages();
    } 
  };

  return (
    <>
      <div className="pt-5 font-mono text-3xl font-bold text-center md:text-5xl">Mars Rover Photos</div>
      <div className="flex flex-col items-center mb-5">
        <form onSubmit={handleSubmit} className="mt-4 mb-4">
          <select value={selectedCamera} onChange={(e) => setSelectedCamera(e.target.value)} className="px-1 py-2 mr-2 border border-gray-300 rounded md:px-4">
            {cameras.map((camera) => (
              <option key={camera.name} value={camera.name}>
                {camera.name}
              </option>
            ))}
          </select>
          <input type="number" value={sol} onChange={(e) => setSol(e.target.value)} className="px-1 py-2 mr-2 border border-gray-300 rounded md:px-6" placeholder="Enter Sol range"/>
          <button type="submit" className="px-1 py-2 font-bold text-white duration-500 bg-purple-500 rounded hover:bg-purple-800 md:px-4">Search</button>
        </form>
        <div className="grid max-w-xs grid-cols-1 mb-20 md:max-w-max md:px-44 md:grid-cols-3 gap-7">
            <img src={marsimage1} alt="Mars Rover" className="h-full mb-4 mr-4 rounded-lg" />
            <img src={marsimage2} alt="Mars Rover" className="h-full mr-4 rounded-lg" />
            <img src={marsimage3} alt="Mars Rover" className="h-full rounded-lg" />
        </div>
        {images.length > 0 && (
          <div className="max-w-xs mb-20 text-center md:max-w-6xl md:px-44">
            <h2 className="mb-4 font-sans text-2xl font-bold">Mars Rovers Images</h2>
            {images.map((image) => (
              <img key={image.id} src={image.img_src} alt="Mars Rover" className="mb-4 rounded-lg"/>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
