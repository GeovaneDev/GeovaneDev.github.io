import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faHome, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#111827] text-[#e0e0e0] pt-16 pb-8 border-t border-gray-800/30 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="text-center">
            <a href="/" className="text-2xl font-bold hover:text-cyan-400 transition-all duration-300 flex items-center justify-center">
              <span className="tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">GeovaneSec</span>
            </a>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desenvolvedor apaixonado por tecnologia, segurança e projetos open-source. Criando soluções inovadoras e seguras para um mundo digital melhor.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse w-4 h-4" />
              <span className="text-gray-400">Feito com dedicação</span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">Home</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <FontAwesomeIcon icon={faProjectDiagram} className="w-4 h-4" />
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">Projetos</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/geovanesec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800/30">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>&copy; {new Date().getFullYear()} GeovaneSec. Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}