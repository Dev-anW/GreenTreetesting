
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, Logo } from '../constants';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const activeLinkStyle = {
        color: '#A3E635',
        fontWeight: '600',
    };

    return (
        <header className="bg-slate-900/80 sticky top-0 z-50 backdrop-blur-sm border-b border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-3">
                        <NavLink to="/" className="flex items-center space-x-3 text-brand-lime">
                            <Logo className="h-8 w-8" />
                            <span className="text-2xl font-bold text-slate-100 tracking-tight">Synergy</span>
                        </NavLink>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map(link => (
                            <NavLink
                                key={link.label}
                                to={link.path}
                                style={({ isActive }) => isActive ? activeLinkStyle : {}}
                                className="text-slate-300 hover:text-brand-lime transition-colors duration-200"
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                        <button className="bg-brand-lime text-slate-900 font-semibold px-5 py-2 rounded-lg hover:bg-lime-200 transition-colors duration-300 transform hover:scale-105">
                            Book a Meeting
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-brand-lime focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {NAV_LINKS.map(link => (
                            <NavLink
                                key={link.label}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                style={({ isActive }) => isActive ? activeLinkStyle : {}}
                                className="text-slate-300 hover:text-brand-lime transition-colors duration-200 text-lg"
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <button className="bg-brand-lime text-slate-900 font-semibold px-6 py-3 mt-4 rounded-lg hover:bg-lime-200 transition-colors duration-300">
                            Book a Meeting
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
