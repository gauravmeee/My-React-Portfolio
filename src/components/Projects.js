import React, { useState, useEffect } from "react";
import pro1 from './assets/Project-MarkdownEdit.png';
import pro2 from './assets/Project-AdBlocker.png';
import pro3 from './assets/Project-CharacterCounter.png';
import pro4 from './assets/Project-OCR.png';
import pro5 from './assets/Project-TeamRaftaar.png';
import pro6 from './assets/Project-GkmeenaApps.png';
import pro7 from './assets/Project-GkmeenaNotes.png';
import pro8 from './assets/Project-CodeBank.png';
import pro9 from './assets/Project-UnseenDiaries.png';

const Icon = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`w-8 h-8 ${className}`} />
);

const projects = [
  { 
    img: pro8, 
    title: "CodeBank", 
    description: "A modern platform for programming resources, contest updates, and tech opportunities with 100+ daily active users.", 
    sourceCode: "https://github.com/gauravmeee/CodeBank", 
    liveProject: "https://codebank-platform.vercel.app/",
    skills: ["Next.js", "Flask", "FastAPI", "React", "Tailwind CSS", "MongoDB"],
    detailedDescription: "A high-performance platform featuring real-time data aggregation, optimized caching, and robust error handling. Achieved 95% accessibility score and maintains 99.9% uptime while serving a growing user base."
  },
  { 
    img: pro9, 
    title: "Unseen Stories", 
    description: "A secure digital sanctuary for personal thoughts, featuring diary uploads and elegant dark theme interface.", 
    sourceCode: "https://github.com/gauravmeee/unseen-stories", 
    liveProject: "https://unseen-stories.vercel.app/",
    skills: ["Next.js", "Supabase", "React", "Tailwind CSS", "Image Processing"],
    detailedDescription: "Digital journaling platform with physical diary integration. Features secure storage, image uploads of physical diary pages, and an intuitive dark-themed interface for seamless writing experience."
  },
  { 
    img: pro7, 
    title: "GKmeena Notes", 
    description: "A very minimilistic Next.js Apps to Collect, Present and Share your Markdown notes effectively", 
    sourceCode: "https://github.com/gauravmeee/My_md_Notes", 
    liveProject: "https://gkmeena-markdown-notes.vercel.app/",
    skills: ["Next.js", "React", "Markdown", "Tailwind CSS", "Vercel"],
    detailedDescription: "A full-stack application built with Next.js that allows users to create, edit, and share markdown notes. Features include real-time preview, syntax highlighting, and easy sharing capabilities."
  },
  { 
    img: pro1, 
    title: "Markdown Editor", 
    description: "A simple React app for creating and saving notes in markdown format", 
    sourceCode: "https://github.com/gauravmeee/React-Markdown-Editor", 
    liveProject: "https://markdown-editor-livepreview.netlify.app/",
    skills: ["React", "JavaScript", "HTML", "CSS", "Netlify"],
    detailedDescription: "A lightweight markdown editor with live preview functionality. Built with React, it provides a clean interface for writing and previewing markdown content in real-time."
  },
  { 
    img: pro6, 
    title: "GKmeena Apps", 
    description: "React-vite App to Dynamically Store and Present All your and Others Useful Apps", 
    sourceCode: "https://github.com/gauravmeee/gkmeena-apps", 
    liveProject: "https://gkmeena-apps.vercel.app/",
    skills: ["React", "Vite", "JavaScript", "CSS", "Vercel"],
    detailedDescription: "A curated collection of useful web applications. Built with React and Vite, it features a clean UI and easy navigation between different apps."
  },
  { 
    img: pro4, 
    title: "Text Extraction", 
    description: "A Flask-based backend to extract text from uploaded files", 
    sourceCode: "https://github.com/gauravmeee/flask-tesseract-ocr", 
    liveProject: "https://image-text-extract.onrender.com/",
    skills: ["Python", "Flask", "Tesseract OCR", "HTML", "CSS"],
    detailedDescription: "A backend service that uses Tesseract OCR to extract text from images and PDFs. Built with Flask, it provides a simple API for text extraction."
  },
  { 
    img: pro5, 
    title: "Frontend Team Raftaar", 
    description: "An eye-catching frontend website for Team Raftaar DTU", 
    sourceCode: "https://github.com/gauravmeee/Teamraftaar", 
    liveProject: "https://teamraftaar.vercel.app/",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vercel"],
    detailedDescription: "A responsive website for Team Raftaar DTU, featuring modern design elements and smooth animations. Built with pure HTML, CSS, and JavaScript."
  },
  { 
    img: pro2, 
    title: "Adblocker Extension", 
    description: "A minimalist Chrome extension to block the irritating ads", 
    sourceCode: "https://github.com/gauravmeee", 
    liveProject: "",
    skills: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    detailedDescription: "A Chrome extension that blocks unwanted advertisements. Built using the Chrome Extension API, it provides a lightweight solution for ad blocking."
  },
  { 
    img: pro3, 
    title: "Character Counter", 
    description: "A realtime text editor using html, css and js to write, edit, and count", 
    sourceCode: "https://github.com/gauravmeee/Grammar-Count", 
    liveProject: "https://grammar-count.netlify.app/",
    skills: ["HTML", "CSS", "JavaScript", "Netlify"],
    detailedDescription: "A real-time text editor with character and word counting functionality. Built with vanilla JavaScript, it provides a simple interface for text editing and analysis."
  },
];

const Card = ({ project, index, isActive, onCardClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    setIsFlipped(!isFlipped);
    onCardClick(index);
  };

  return (
    <div 
      className={`project-card [perspective:1000px] w-[280px] h-[380px] cursor-pointer transition-all duration-500 ease-in-out outline-none focus:outline-none select-none ${isActive ? 'scale-105' : 'scale-100'}`}
      onClick={toggleFlip}
      tabIndex={0}
    >
      <div className={`relative w-full h-full transition-transform duration-500 ${isFlipped ? '[transform:rotateY(180deg)]' : ''} [transform-style:preserve-3d]`}>
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className={`h-full bg-white rounded-xl overflow-hidden flex flex-col border transition-all duration-500 ease-in-out ${
            isActive 
              ? 'shadow-[0_0_15px_rgba(99,102,241,0.5)] border-indigo-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]' 
              : 'shadow-lg border-gray-100 hover:shadow-xl'
          }`}>
            <div className="h-1/2 p-3">
              <div className="w-full h-full rounded-lg overflow-hidden border border-gray-100">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover select-none" 
                  draggable="false"
                />
              </div>
            </div>
            <div className="h-1/2 p-3 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-6xl font-bold text-indigo-200 select-none">
                  #{index + 1}
                </span>
              </div>
              <div className="relative z-10 text-center h-full flex flex-col justify-center">
                <h4 className="text-lg font-semibold mb-2 text-gray-800 select-none">{project.title}</h4>
                <p className="text-gray-600 mb-3 line-clamp-2 text-sm select-none">
                  {project.description}
                </p>
                <div className="flex justify-center gap-2 mt-auto">
                  <a 
                    href={project.sourceCode} 
                    className="px-2.5 py-1 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Github
                  </a>
                  {project.liveProject && (
                    <a 
                      href={project.liveProject} 
                      className="px-2.5 py-1 text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-xl p-3 border transition-all duration-500 ease-in-out ${
          isActive 
            ? 'shadow-[0_0_15px_rgba(99,102,241,0.5)] border-indigo-300' 
            : 'shadow-lg border-gray-100'
        }`}>
          <div className="h-full flex flex-col justify-between">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2 text-gray-800 select-none">{project.title}</h4>
              <p className="text-gray-600 mb-3 text-sm select-none">{project.detailedDescription}</p>
              <div>
                <h5 className="font-semibold mb-2 text-sm text-indigo-700 select-none">Skills Used:</h5>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {project.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  };

  // Add click handler at document level
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the click is on a card or its children
      const isCardClick = e.target.closest('.project-card');
      if (!isCardClick) {
        setActiveCardIndex(null);
      }
    };

    // Add event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Empty dependency array since we don't need to re-add the listener

  return (
    <section id="projects" className="section min-h-[calc(100vh-4rem)] pt-16">
      <div className="section-container h-full p-0">
        <div className="text-center transition-all duration-300 mb-2">
          {activeCardIndex !== null ? (
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 py-1.5 sm:py-2 px-4 sm:px-6 rounded-full inline-block shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                {projects[activeCardIndex].title}
              </h2>
            </div>
          ) : (
            <p className="section-subtitle">Browse My</p>
          )}
        </div>
        <h1 className="section-title mb-6">Projects</h1>
        <div className="container h-[calc(100%-6rem)]">
          <div className="flex overflow-x-auto overflow-y-visible py-8 px-4 gap-6 snap-x snap-mandatory scrollbar-none">
            {projects.map((project, index) => (
              <div key={index} className="snap-center flex-shrink-0">
                <Card 
                  project={project} 
                  index={index} 
                  isActive={activeCardIndex === index}
                  onCardClick={handleCardClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
