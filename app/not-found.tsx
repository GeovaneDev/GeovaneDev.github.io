import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0a0a] to-[#111827] text-gray-100">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="container mx-auto px-4 py-24 flex flex-col items-center">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 text-transparent bg-clip-text animate-gradient tracking-tight">
              404
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Oops! Parece que você se perdeu no caminho.
            </p>
            <div className="flex gap-6 justify-center pt-8">
              <Link 
                href="/"
                className="social-button group hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600"
              >
                <FontAwesomeIcon 
                  icon={faHome} 
                  className="mr-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                />
                Voltar para Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}