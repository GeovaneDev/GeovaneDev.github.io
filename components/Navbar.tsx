"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && 
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="fixed w-full bg-[#0a0a0a]/95 backdrop-blur-xl text-[#e0e0e0] shadow-2xl z-50 border-b border-gray-800/30">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <a href="/" className="text-2xl font-bold hover:text-cyan-400 transition-all duration-300 flex items-center">
                        <span className="tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">GeovaneSec</span>
                    </a>

                    <div className="hidden md:flex items-center space-x-10">
                        <a href="/" className="nav-link group flex flex-col items-center">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faHome} className="mr-2 w-[1em] h-[1em]" />
                                <span className="font-medium">Home</span>
                            </div>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                        </a>
                        <a href="#projects" className="nav-link group flex flex-col items-center">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faProjectDiagram} className="mr-2 w-[1em] h-[1em]" />
                                <span className="font-medium">Projects</span>
                            </div>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                        </a>
                        <a href="https://github.com/GeovaneSec" className="nav-link group flex flex-col items-center">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faGithub} className="mr-2 w-[1em] h-[1em]" />
                                <span className="font-medium">GitHub</span>
                            </div>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                        </a>
                    </div>

                    <button 
                        ref={buttonRef}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800/80 hover:bg-cyan-400/20 transition-all duration-300 border border-gray-700/30"
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon 
                            icon={isMobileMenuOpen ? faTimes : faBars}
                            className={`w-5 h-5 transition-all duration-300 ${
                                isMobileMenuOpen ? 'rotate-180 text-cyan-400' : 'rotate-0'
                            }`}
                        />
                    </button>
                </div>

                <div 
                    ref={menuRef}
                    className={`md:hidden fixed left-0 right-0 bg-[#0a0a0a] transition-all duration-300 ease-in-out border-b border-gray-800/30 ${
                        isMobileMenuOpen 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 -translate-y-full pointer-events-none"
                    }`}
                >
                    <div className="container mx-auto px-6 py-8 space-y-2">
                        <a 
                            href="#" 
                            className="mobile-link group block" 
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="flex items-center p-4 rounded-2xl hover:bg-gray-800/40 transition-all duration-300 group-hover:translate-x-2">
                                <FontAwesomeIcon 
                                    icon={faHome} 
                                    className="w-6 h-6 mr-4 text-cyan-400" 
                                />
                                <span className="text-lg font-medium tracking-wide">Home</span>
                            </div>
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </a>
                        
                        <a 
                            href="#projects" 
                            className="mobile-link group block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="flex items-center p-4 rounded-2xl hover:bg-gray-800/40 transition-all duration-300 group-hover:translate-x-2">
                                <FontAwesomeIcon 
                                    icon={faProjectDiagram} 
                                    className="w-6 h-6 mr-4 text-cyan-400" 
                                />
                                <span className="text-lg font-medium tracking-wide">Projects</span>
                            </div>
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </a>
                        
                        <a 
                            href="https://github.com/GeovaneSec" 
                            className="mobile-link group block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="flex items-center p-4 rounded-2xl hover:bg-gray-800/40 transition-all duration-300 group-hover:translate-x-2">
                                <FontAwesomeIcon 
                                    icon={faGithub} 
                                    className="w-6 h-6 mr-4 text-cyan-400" 
                                />
                                <span className="text-lg font-medium tracking-wide">GitHub</span>
                            </div>
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}