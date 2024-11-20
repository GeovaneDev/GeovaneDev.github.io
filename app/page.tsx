import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: "B3API",
    description: "Uma API dedicada aos dados do mercado financeiro brasileiro (B3).",
    icon: faCode,
    tags: ["API", "Finance", "Data"],
    link: "https://b3api.me",
    github: "https://github.com/GeovaneSec/B3API",
    demoEnabled: true
  },
  {
    title: "Site para a Banda Little Dolly",
    description: "Um site desenvolvido usando HTML e CSS para apresentar e divulgar a banda.",
    icon: faCode,
    tags: ["HTML", "CSS", "Web"],
    link: "",
    github: "https://github.com/bandalittledolly/Website",
    demoEnabled: false
  },
  {
    title: "Site do FlexTux",
    description: "Um site desenvolvido usando HTML e CSS para apresentar o FlexTux. (Descontinuado)",
    icon: faCode,
    tags: ["HTML", "CSS", "Linux"],
    link: "",
    github: "https://github.com/FlexTux/FlexTux-Website",
    demoEnabled: false
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0a0a] to-[#111827] text-gray-100">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="container mx-auto px-4 py-24 flex flex-col items-center">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text animate-gradient tracking-tight">
              GeovaneSec Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia, segurança e projetos open-source.
            </p>
            <div className="flex gap-6 justify-center pt-8">
              <a 
                href="https://github.com/GeovaneSec" 
                className="social-button group hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600"
              >
                <FontAwesomeIcon 
                  icon={faGithub} 
                  className="mr-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                />
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20" id="projects">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500">
              Projetos
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative project-card bg-gray-800/30 p-8 rounded-2xl hover:transform hover:scale-[1.02] transition-all duration-500 backdrop-blur-lg border border-gray-700/30 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="text-cyan-400 text-3xl mb-6 transition-transform duration-500 transform group-hover:translate-x-2">
                  <FontAwesomeIcon icon={project.icon} className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-100">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-1.5 text-sm bg-gray-700/50 rounded-full text-cyan-300 border border-gray-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoEnabled && (
                    <a 
                      href={project.link} 
                      className="btn-primary hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      Site
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    className="btn-secondary hover:shadow-lg hover:shadow-gray-500/20"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}