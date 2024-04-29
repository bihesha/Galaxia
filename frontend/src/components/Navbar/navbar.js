import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../ContextComponents/ContextComponent";

export default function Header() {
    const [open, setOpen] = useState(false);
    const Links = [
        {name: "HOME", link: "/home"},
        {name: "ASTRONOMY IMAGES", link: "/picture of the day"},
        {name: "MARS IMAGES", link: "/mars rovers pictures"},
        {name: "EARTH IMAGE", link: "/picture of the earth"},
        {name: "ABOUT", link: "/about"},
    ];
    const location = useLocation();
    const hideHeader = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/add';
    const { user } = useContext(UserContext);

    if (hideHeader) {
        return null;
    }

    // Log out function
    function logOut() {
        localStorage.clear();
        window.location.href = '/login';
    }

    return (
        <>
            <div className="top-0 left-0 z-20 w-full shadow-md">
                <div className="relative items-center justify-between px-5 py-3 bg-purple-700 md:flex md:px-10">
                    <a href="/home" className="flex items-center font-mono text-3xl font-bold text-white cursor-pointer">
                        <span className="px-2 pt-2 mr-1 text-4xl text-white">
                            <ion-icon name="logo-electron"></ion-icon>
                        </span>
                        Galaxia
                    </a>
                    <div onClick={() => setOpen(!open)} className="absolute text-4xl cursor-pointer right-8 top-6 md:hidden">
                        <ion-icon name={open ? 'close':'menu'}></ion-icon>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-purple-700 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0 z-30`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className="text-lg md:ml-8 md:my-0 my-7 font-sans">
                                    <a href={link.link} className="text-white duration-500 hover:text-black">{link.name}</a>
                                </li>
                            ))
                        }
                        <span className="flex pt-1 ml-5 text-4xl text-white cursor-pointer hover:text-black md:my-0 my-7">
                            <a href={`/profile/${user._id}`}><ion-icon name="person-circle-sharp"></ion-icon></a>
                        </span>
                        <button onClick={logOut} className="px-6 py-2 font-sans text-black duration-500 bg-white rounded md:ml-8 hover:bg-red-600 hover:text-white">
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </>
    );
}
