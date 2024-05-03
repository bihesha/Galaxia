import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import backIndex from '../../Images/backIndex.jpg';

export default function Index() {
    return(
        <div className="flex flex-col min-h-screen bg-cover" style={{backgroundImage: `url(${backIndex})`}}>
            {/* Header with NASA-like font */}
            <div className="mt-8 ml-8"> {/* Adjust margin as needed */}
                <h1 className="mb-6 font-serif text-6xl font-bold text-white md:text-8xl">Galaxia</h1>
                <div className="p-6 mr-4 bg-black rounded-lg md:ml-4 md:max-w-3xl bg-opacity-70 mx-w-xl">
                    <p className="mb-5 text-xl font-thin text-justify text-white">
                        Welcome to Galaxia, your portal to the wonders of space exploration! 
                        Delve into the vast expanse of the cosmos, where mysteries await discovery 
                        and boundaries are constantly pushed. Join us on an exhilarating journey as 
                        we unravel the secrets of the universe, from distant galaxies to the inner 
                        workings of our own solar system. Whether you're an avid stargazer or a curious 
                        explorer, Galaxia offers a glimpse into the awe-inspiring beauty and infinite 
                        possibilities of outer space. Embark on this cosmic adventure with NASA, where 
                        every discovery is a step towards understanding the cosmos and our place within it.
                    </p>
                </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex items-end justify-end mr-5 space-x-4 mt-28">
                <Link to="/login" className="px-10 py-4 text-xl font-bold text-white bg-purple-500 rounded md:px-20 hover:bg-purple-700">Login</Link>
                <Link to="/add" className="px-10 py-4 text-xl font-bold text-white bg-purple-500 rounded md:px-20 hover:bg-purple-700">Signup</Link>
            </div>
        </div>
    )
}