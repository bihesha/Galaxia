import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const location = useLocation()
    const hideHeader = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/add';

    if (hideHeader) {
        return null; 
    }

    return (
        <>
            <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-purple-700 dark:border-purple-600">
                <span class="text-sm text-white sm:text-center dark:text-white">© {currentYear} <a href="https://www.nasa.gov/" class="hover:underline">Galaxia™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
                    <li>
                        <a href="/home" class="hover:underline me-4 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href="/mars rovers pictures" class="hover:underline me-4 md:me-6">Mars Images</a>
                    </li>
                    <li>
                        <a href="/picture of the day" class="hover:underline me-4 md:me-6">Astronomy Images</a>
                    </li>
                    <li>
                        <a href="/about" class="hover:underline">About</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}
