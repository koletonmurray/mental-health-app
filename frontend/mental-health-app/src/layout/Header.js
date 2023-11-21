import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'

function Header() {

    // Define a CSS class for the header based on the selected theme
    const primaryColor = 'bg-blue-500';
    const secondaryColor = 'bg-blue-400';


    return (
        <div className={`bg-gray-100 flex flex-col`}>
            <div className={`${primaryColor} text-white py-4 relative text-center font-bold`}>
                <h1 className="text-3xl">
                    <Link to="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-12 h-12 inline-block mr-2 -translate-y-[15%]"
                        />
                        Missionary Mental Health
                    </Link>
                </h1>
            </div>
            <nav className={`${secondaryColor} p-2`}>
                <ul className="flex justify-center space-x-10 font-bold text-lg text-white">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/activity">Activity</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li><Link to="/chatbot">ChatBot</Link></li>
                    <li><Link to="/dailytracker">Daily Tracker</Link></li>
                    <li><Link to="/game">Game</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;