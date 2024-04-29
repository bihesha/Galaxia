import React, { useState, useEffect } from "react";
// Slider Images
import slider1 from '../../Images/slider1.jpg';
import slider2 from '../../Images/slider2.jpeg';
import slider3 from '../../Images/slider3.jpg';
import slider4 from '../../Images/slider4.jpg';
import slider5 from '../../Images/slider5.jpg';
import slider6 from '../../Images/slider6.jpg';
// Card Images
import card1 from '../../Images/card1.jpg';
import card2 from '../../Images/card2.jpg';
import card3 from '../../Images/card3.jpg';
import card4 from '../../Images/card4.jpg';

const images = [slider1, slider2, slider3, slider4, slider5, slider6];

export default function Dashboard() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    return (
        <>
            <div className="relative overflow-hidden md:h-[30rem]">
                <button className="absolute left-0 px-2 py-1 text-2xl text-white transform -translate-y-1/2 md:text-4xl hover:text-purple-700 top-1/2"
                    onClick={prevSlide}>
                    <ion-icon name="chevron-back-circle"></ion-icon>
                </button>
                <button className="absolute right-0 px-6 py-1 text-2xl text-white transform -translate-y-1/2 md:text-4xl hover:text-purple-700 top-1/2"
                    onClick={nextSlide}>
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </button>
                <img className="w-full h-64 md:h-auto" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`}/>

                <div className="absolute px-4 md:py-2 text-white md:left-16 md:top-20 left-5 top-5">
                    <p className="md:text-7xl text-xl font-bold md:w-[48rem] w-50">Contribute the NASA Mission</p><br/>
                    <p className="md:text-xl text-xs font-bold md:w-1/2 w-[18rem] text-justify">Embark on a journey beyond Earth's bounds as NASA and Boeing join forces for the Crew Flight Test, pioneering the next chapter in human space exploration.
                    Prepare to witness the convergence of cutting-edge technology and human ambition as NASA and its partners push the boundaries of space exploration with the upcoming Crew Flight Test.</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`md:w-3 w-2 md:h-3 h-2 mx-2 rounded-full cursor-pointer ${currentSlide === index ? 'bg-purple-700' : 'bg-gray-300'}`}
                            onClick={() => setCurrentSlide(index)}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Features */}
            <h2 className="md:text-5xl text-3xl text-center font-sans font-extrabold mt-2">Features</h2>

            <div className="flex justify-center items-center mt-6"> 
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl max-w-sm dark:border-purple-400 dark:bg-purple-400 ">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-[30rem] md:w-[60rem] md:rounded-none md:rounded-l-lg" src={card1} alt="SliderImage"/>
                    <div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Astronomy Picture of the Day</h5>
                            <p className="md:mb-3 mb-0 text-justify font-normal text-gray-700 dark:text-black">The NASA API's Astronomy Picture of the Day (APOD) serves as a comprehensive repository of captivating images and informative descriptions, offering a daily immersion into the wonders of the universe. Each entry encapsulates the essence of human curiosity and exploration, showcasing the synergistic relationship between cutting-edge technological advancements and the insatiable quest for knowledge about our cosmos.
                            As humanity continues to push the boundaries of space exploration, APOD stands as a testament to our collective curiosity and ambition, providing a glimpse into the forefront of scientific discovery while igniting a sense of wonder and curiosity that transcends cultural and geographical boundaries.
                            In this ever-expanding quest for knowledge, APOD serves as a beacon of inspiration, reminding us of the boundless possibilities that await us among the stars.</p>
                        </div>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            window.location.href = '/picture of the day'
                        }} className="px-6 py-2 font-sans text-black duration-500 bg-white rounded md:ml-4 ml-2 mb-3 hover:bg-red-600 hover:text-white">Read More</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-5"> 
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl max-w-sm dark:border-purple-400 dark:bg-purple-400 ">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-[24rem] md:w-[50rem] md:rounded-none md:rounded-l-lg" src={card2} alt="SliderImage"/>
                    <div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Mars Rover Photos</h5>
                            <p className="md:mb-3 mb-0 text-justify font-normal text-gray-700 dark:text-black">The Mars Rover Photos initiative represents a monumental endeavor in human exploration, facilitated by cutting-edge technology and fueled by an insatiable thirst for understanding the mysteries of the Red Planet. Through a meticulously planned series of missions, NASA's rovers serve as our robotic eyes and hands on the Martian surface, capturing breathtaking images and invaluable data that offer unprecedented insights into the geology, atmosphere, and potential habitability of Mars.
                            Furthermore, the Mars Rover Photos initiative embodies the collaborative spirit of international cooperation, with contributions from scientists, engineers, and researchers around the globe.</p>
                        </div>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            window.location.href = '/mars rovers pictures'
                        }} className="px-6 py-2 font-sans text-black duration-500 bg-white rounded md:ml-4 ml-2 mb-3 hover:bg-red-600 hover:text-white">Read More</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-5"> 
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl max-w-sm dark:border-purple-400 dark:bg-purple-400 ">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-[27rem] md:w-[60rem] md:rounded-none md:rounded-l-lg" src={card3} alt="SliderImage"/>
                    <div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Earth Polychromatic Imaging Camera</h5>
                            <p className="md:mb-3 mb-0 text-justify font-normal text-gray-700 dark:text-black">The Earth Polychromatic Imaging Camera (EPIC) stands as a remarkable testament to humanity's technological prowess and its commitment to understanding our home planet from a unique vantage point. Orbiting aboard the NOAA's Deep Space Climate Observatory (DSCOVR) satellite, EPIC captures stunning images of Earth in its entirety, providing a comprehensive and unprecedented view of our planet's dynamic and ever-changing surface.
                            Equipped with a suite of advanced sensors and imaging capabilities, EPIC transcends traditional Earth observation methods by offering a multispectral perspective that captures the intricate interplay of light, atmosphere, and terrain.
                            Through public dissemination and outreach efforts, EPIC fosters a sense of stewardship and appreciation for our planet, inspiring individuals around the world to become advocates for environmental conservation and sustainability.</p>
                        </div>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            window.location.href = '/picture of the earth'
                        }} className="px-6 py-2 font-sans text-black duration-500 bg-white rounded md:ml-4 ml-2 mb-3 hover:bg-red-600 hover:text-white">Read More</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-28 mt-5"> 
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl max-w-sm dark:border-purple-400 dark:bg-purple-400 ">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-[23.7rem] md:w-[60rem] md:rounded-none md:rounded-l-lg" src={card4} alt="SliderImage"/>
                    <div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Most Famous Astronauts</h5>
                            <p className="md:mb-3 mb-0 text-justify font-normal text-gray-700 dark:text-black">Famous astronauts embody the pinnacle of human achievement, serving as trailblazers, explorers, and ambassadors of humanity's quest to reach beyond the confines of Earth and explore the cosmos. These remarkable individuals have ventured into the vast unknown, overcoming immense challenges and pushing the boundaries of human endurance to expand our understanding of space and inspire future generations.
                            Their courage, dedication, and scientific achievements serve as a testament to the power of human ingenuity and cooperation, inspiring us to continue reaching for the stars and unlocking the mysteries of the cosmos.</p>
                        </div>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            window.location.href = '/about'
                        }} className="px-6 py-2 font-sans text-black duration-500 bg-white rounded md:ml-4 ml-2 mb-3 hover:bg-red-600 hover:text-white">Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
}
