import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#1a1f2e] text-gray-100">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="container mx-auto px-4 py-32 flex flex-col items-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>
          <div className="text-center space-y-10 max-w-4xl mx-auto relative z-10">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text animate-gradient tracking-tight">
                404
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-3xl md:text-4xl text-gray-200 font-semibold">
                Página não encontrada
              </p>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                Desculpe, mas a página que você está procurando não existe ou foi movida.
              </p>
            </div>
            <div className="flex gap-8 justify-center pt-10">
              <Link 
                href="/"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500 hover:to-blue-500 border border-cyan-500/20 hover:border-cyan-400 rounded-xl text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center group backdrop-blur-xl shadow-lg hover:shadow-cyan-500/25"
              >
                <FontAwesomeIcon 
                  icon={faHome} 
                  className="mr-3 w-6 h-6 group-hover:scale-110 transition-all duration-300" 
                />
                Retornar à Página Inicial
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}