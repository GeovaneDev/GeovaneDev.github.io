import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faHome, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a]/95 to-[#111827]/95 backdrop-blur-xl text-[#e0e0e0] pt-16 pb-8 border-t border-gray-800/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="text-center md:text-left">
            <a href="/" className="inline-block text-2xl font-bold transition-all duration-300">
              <span className="tracking-wide bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600">GeovaneSec</span>
            </a>
            <p className="text-gray-300 mt-6 leading-relaxed text-lg">
              Desenvolvedor apaixonado por tecnologia, segurança e projetos open-source. Criando soluções inovadoras e seguras para um mundo digital melhor.
            </p>
            <div className="flex items-center mt-6 space-x-3 text-sm md:justify-start justify-center group hover:bg-gradient-to-r hover:from-cyan-500/5 hover:to-blue-500/5 px-4 py-2 rounded-xl transition-all duration-300">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-400 font-medium group-hover:text-cyan-400 transition-colors duration-300">Feito com dedicação</span>
            </div>
          </div>

          <div className="md:text-right text-center">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">Links Rápidos</h3>
            <ul className="space-y-4">
              <li className="flex md:justify-end justify-center">
                <a href="/" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-3 group px-4 py-2 rounded-xl hover:bg-cyan-500/5">
                  <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 font-medium">Home</span>
                </a>
              </li>
              <li className="flex md:justify-end justify-center">
                <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-3 group px-4 py-2 rounded-xl hover:bg-cyan-500/5">
                  <FontAwesomeIcon icon={faProjectDiagram} className="w-5 h-5" />
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 font-medium">Projetos</span>
                </a>
              </li>
              <li className="flex md:justify-end justify-center">
                <a
                  href="https://github.com/geovanesec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-3 group px-4 py-2 rounded-xl hover:bg-cyan-500/5"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 font-medium">GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800/30">
          <p className="text-gray-400 flex items-center justify-center gap-4 text-sm font-medium">
            <span>&copy; {new Date().getFullYear()} GeovaneSec. Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}