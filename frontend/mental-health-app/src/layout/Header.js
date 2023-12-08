import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    console.log(window.innerWidth);
    
    return (
        <div className={`bg-gray-100 flex flex-col`}>
            <div className={`bg-darkgreen text-white py-4 relative text-center font-bold`}>
                <h1 className="text-3xl">
                    <Link to="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-20 h-20 inline-block mr-2 -translate-y-[5%]"
                        />
                        Liahona Lifts
                    </Link>
                </h1>
            </div>
            <nav className={`bg-lightgreen p-2`}>
                <div className="flex items-center justify-center">
                    <div className="md:hidden">
                    {isMobileMenuOpen ? (
                        <FaTimes onClick={toggleMobileMenu} className="text-white text-2xl cursor-pointer" />
                    ) : (
                        <FaBars onClick={toggleMobileMenu} className="text-white text-2xl cursor-pointer" />
                    )}
                    </div>
                </div>
                <ul className={`md:flex md:space-x-10 md:font-semibold md:text-lg md:text-white md:font-serif justify-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <li className='font-semibold text-lg text-white font-serif mb-1'><Link to="/">Home</Link></li>
                    <li className='font-semibold text-lg text-white font-serif mb-1'><Link to="/activity">Activities</Link></li>
                    <li className='font-semibold text-lg text-white font-serif mb-1'><Link to="/resources">Resources</Link></li>
                    <li className='font-semibold text-lg text-white font-serif mb-1'><Link to="/track">Daily Tracker</Link></li>
                    <li className='font-semibold text-lg text-white font-serif'><Link to='/get-help'>Get Help</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
