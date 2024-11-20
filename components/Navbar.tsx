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
        <nav className="fixed w-full bg-gradient-to-b from-[#0a0a0a]/95 to-[#111827]/95 backdrop-blur-xl text-[#e0e0e0] shadow-lg z-50 border-b border-gray-800/30">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <a href="/" className="text-2xl font-bold transition-all duration-300 flex items-center group">
                        <span className="tracking-wide bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-600 transform group-hover:scale-105 transition-all duration-300">GeovaneSec</span>
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="nav-link group px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/5 hover:to-blue-500/5 transition-all duration-300">
                            <div className="flex items-center space-x-2 text-gray-300 group-hover:text-cyan-400">
                                <FontAwesomeIcon icon={faHome} className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-medium">Home</span>
                            </div>
                            <div className="mt-1 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"></div>
                        </a>
                        <a href="#projects" className="nav-link group px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/5 hover:to-blue-500/5 transition-all duration-300">
                            <div className="flex items-center space-x-2 text-gray-300 group-hover:text-cyan-400">
                                <FontAwesomeIcon icon={faProjectDiagram} className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-medium">Projetos</span>
                            </div>
                            <div className="mt-1 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"></div>
                        </a>
                        <a 
                            href="https://github.com/GeovaneSec" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/20 hover:border-cyan-400 rounded-xl font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group shadow-lg hover:shadow-cyan-500/25"
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300" />
                            <span>GitHub</span>
                        </a>
                    </div>

                    <button 
                        ref={buttonRef}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/25"
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon 
                            icon={isMobileMenuOpen ? faTimes : faBars}
                            className={`w-4 h-4 transition-all duration-300 ${
                                isMobileMenuOpen ? 'rotate-180 text-cyan-400' : 'rotate-0 text-gray-300'
                            }`}
                        />
                    </button>
                </div>

                <div 
                    ref={menuRef}
                    className={`md:hidden fixed left-0 right-0 bg-gradient-to-b from-[#0a0a0a]/98 to-[#111827]/98 backdrop-blur-xl transition-all duration-300 ease-in-out border-b border-gray-800/30 ${
                        isMobileMenuOpen 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 -translate-y-full pointer-events-none"
                    }`}
                >
                    <div className="container mx-auto px-6 py-6 space-y-3">
                        <a 
                            href="/" 
                            className="block group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-cyan-500/5 hover:to-blue-500/5 border border-transparent hover:border-cyan-500/20 transition-all duration-300 transform hover:translate-x-2">
                                <FontAwesomeIcon 
                                    icon={faHome} 
                                    className="w-5 h-5 mr-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" 
                                />
                                <span className="text-base font-medium text-gray-300 group-hover:text-cyan-400">Home</span>
                            </div>
                        </a>
                        
                        <a 
                            href="#projects" 
                            className="block group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-cyan-500/5 hover:to-blue-500/5 border border-transparent hover:border-cyan-500/20 transition-all duration-300 transform hover:translate-x-2">
                                <FontAwesomeIcon 
                                    icon={faProjectDiagram} 
                                    className="w-5 h-5 mr-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" 
                                />
                                <span className="text-base font-medium text-gray-300 group-hover:text-cyan-400">Projetos</span>
                            </div>
                        </a>
                        
                        <a 
                            href="https://github.com/GeovaneSec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-cyan-500/5 hover:to-blue-500/5 border border-transparent hover:border-cyan-500/20 transition-all duration-300 transform hover:translate-x-2">
                                <FontAwesomeIcon 
                                    icon={faGithub} 
                                    className="w-5 h-5 mr-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" 
                                />
                                <span className="text-base font-medium text-gray-300 group-hover:text-cyan-400">GitHub</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}